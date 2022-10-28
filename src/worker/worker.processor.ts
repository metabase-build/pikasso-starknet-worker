import { Process, Processor } from '@nestjs/bull';
import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Job } from 'bull';
import { BigNumber, ethers } from 'ethers';
import {
  create_OZ_account,
  deploy_ERC721,
  mint_with_owner,
  owner_multi_call,
  transfer_by_NFT_owner,
} from 'src/chain-integration';
import { CoreServiceClient, CORE_SERVICE_NAME } from 'src/protobuf/interface-ts/core-service';
import { EProjectStatus, EQueueEvent, ETokenStatus, ETransactionStatus } from 'src/protobuf/interface-ts/enums';
import { ProjectUpdate } from 'src/protobuf/interface-ts/project';
import { TransactionUpdate } from 'src/protobuf/interface-ts/transaction';
import { sleep } from '../utils';

import * as dotenv from 'dotenv';
import { NftUpdate } from 'src/protobuf/interface-ts/nft';
dotenv.config();

const { NODE_ENV } = process.env;
@Processor(`${NODE_ENV + '_'}metabuild`)
export class HandleProcessor implements OnModuleInit {
  private readonly logger = new Logger(HandleProcessor.name);
  private coreService: CoreServiceClient;

  constructor(@Inject(CORE_SERVICE_NAME) private coreServiceClient: ClientGrpc) {}

  async onModuleInit() {
    // Initilize project service client
    this.coreService = this.coreServiceClient.getService<CoreServiceClient>(CORE_SERVICE_NAME);

    while (true) {
      // Get all projects that are in creating status
      try {
        const request = await this.coreService.ping({ input: 'ping' }).toPromise();

        if (request['output'] === 'pong') {
          return true;
        }
      } catch (error) {
        this.logger.error(error);
      }

      await sleep(3000);
    }
  }

  @Process(EQueueEvent.CREATE_STARKNET_PROJECT)
  async handlerCreateProject(job: Job) {
    this.logger.debug(`Handle Event ${EQueueEvent.CREATE_STARKNET_PROJECT}...`);

    const { metaData, transactionId } = job.data;
    const project = metaData;

    try {
      // Create account
      const { accountAddress, privateKey } = await create_OZ_account();

      //Create L1 account
      const ethWallet = ethers.Wallet.createRandom();

      await this.coreService
        .updateProjectById({
          id: project.id,
          update: ProjectUpdate.fromJSON({
            masterAddress: accountAddress,
            masterPrivateKey: privateKey,
            l1Mnemonic: ethWallet.mnemonic.phrase,
            status: EProjectStatus.CREATING_ERC721_CONTRACT,
          }),
        })
        .toPromise();

      // Deploy ERC721 contract
      const contractAddress = await deploy_ERC721(ethWallet.address);
      await this.coreService
        .updateProjectById({
          id: project.id,
          update: ProjectUpdate.fromJSON({
            contract721Address: contractAddress,
            status: EProjectStatus.SUCCESS,
          }),
        })
        .toPromise();

      // Update transaction status to success
      await this.coreService
        .updateTransactionById({
          id: transactionId,
          update: TransactionUpdate.fromJSON({ status: ETransactionStatus.SUCCESS }),
        })
        .toPromise();
    } catch (error) {
      this.logger.error(error);

      // Update project status to failed
      await this.coreService
        .updateProjectById({
          id: project.id,
          update: ProjectUpdate.fromJSON({
            status: EProjectStatus.FAILED,
          }),
        })
        .toPromise();

      // Update transaction status to failed
      await this.coreService
        .updateTransactionById({
          id: transactionId,
          update: TransactionUpdate.fromJSON({ status: 'failed' }),
        })
        .toPromise();

      throw error;
    }
  }

  @Process(EQueueEvent.CREATE_STARKNET_NFT)
  async mintNftToPool(job: Job) {
    this.logger.debug(`Handle Event ${EQueueEvent.CREATE_STARKNET_NFT}...`);

    const { calls, metaData, transactionId, project } = job.data;
    const { contractAddress, masterAddress, masterPrivateKey, ipfsUrl, nftObjectIds } = metaData;

    try {
      //mint nft
      const executeTransactionHash = await owner_multi_call(masterPrivateKey, masterAddress, calls);

      await this.coreService
        .updateNftById({
          id: project.id,
          update: NftUpdate.fromJSON({
            metadataId: ipfsUrl,
            mintTxHash: executeTransactionHash,
            status: ETokenStatus.SUCCESS,
          }),
        })
        .toPromise();

      // Update transaction status to success
      await this.coreService
        .updateTransactionById({
          id: transactionId,
          update: TransactionUpdate.fromJSON({
            status: ETransactionStatus.SUCCESS,
          }),
        })
        .toPromise();
    } catch (error) {
      this.logger.error(error);

      // Update nft status to failed
      await this.coreService
        .updateNftByTransactionId({
          id: transactionId,
          update: NftUpdate.fromJSON({
            status: ETokenStatus.FAILED,
          }),
        })
        .toPromise();

      // Update transaction status to failed
      await this.coreService
        .updateTransactionById({
          id: transactionId,
          update: TransactionUpdate.fromJSON({
            status: ETransactionStatus.FAILED,
            error: error.message || `${error}`,
          }),
        })
        .toPromise();

      throw error;
    }
  }

  @Process(EQueueEvent.TRANSFER_STARKNET_NFT)
  async assignNft(job: Job) {
    this.logger.debug(`Handle Event ${EQueueEvent.TRANSFER_STARKNET_NFT}...`);

    const { metaData, transactionId, calls } = job.data;
    const data = calls[0];

    try {
      await transfer_by_NFT_owner(
        data.masterAddress,
        data.walletAddress,
        data.masterPrivateKey, //privatetoPlayer key of NFT owner
        data.contract721Address,
        data.nftId,
      );

      await this.coreService
        .updateNftById({
          id: metaData.tokenID,
          update: NftUpdate.fromJSON({
            owner: data.walletAddress,
            status: ETokenStatus.TRANSFER_SUCCESS,
          }),
        })
        .toPromise();

      // Update transaction status to success
      await this.coreService
        .updateTransactionById({
          id: transactionId,
          update: TransactionUpdate.fromJSON({
            status: ETransactionStatus.SUCCESS,
          }),
        })
        .toPromise();
    } catch (error) {
      this.logger.error(error);

      // Update nft status to failed
      await this.coreService
        .updateNftByTransactionId({
          id: transactionId,
          update: NftUpdate.fromJSON({
            status: ETokenStatus.TRANSFER_FAILED,
          }),
        })
        .toPromise();

      // Update transaction status to failed
      await this.coreService
        .updateTransactionById({
          id: transactionId,
          update: TransactionUpdate.fromJSON({
            status: ETransactionStatus.FAILED,
            error: error.message || `${error}`,
          }),
        })
        .toPromise();

      throw error;
    }
  }
}
