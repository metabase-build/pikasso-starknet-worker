import * as compiledOZAccount from './contracts/Account.json';
import * as compiledArgentAccount from './contracts/ArgentAccount.json';
import * as compiledErc721 from './contracts/ERC721_bridge.json';
import * as compiledErc20 from './contracts/ERC20.json';

import { Account, Abi, CompiledContract, Contract, defaultProvider, ec, hash, json, number } from 'starknet';

import { StarknetChainId } from 'starknet/constants';
import { toHex, toBN } from 'starknet/utils/number';
import { transformCallsToMulticallArrays, fromCallsToExecuteCalldataWithNonce } from 'starknet/utils/transaction';
import { bnToUint256 } from 'starknet/utils/uint256';
import { uint256ToBN } from 'starknet/utils/uint256';
import { CID } from 'multiformats/cid';
import { base16 } from 'multiformats/bases/base16';

/**
 * Function deploys an Openzeppline account contract then returns the account address and the private key
 *@returns  accountAddress, privateKey
 */
/**
 * Function deploys an Openzeppline account contract then returns the account address and the private key
 *@returns  accountAddress, privateKey
 */
export async function create_OZ_account(): Promise<any> {
  console.log('Reading Argent Account Contract...');

  // Generate public and private key pair.
  const starkKeyPair = ec.genKeyPair();
  const starkKeyPub = ec.getStarkKey(starkKeyPair);

  // ArgentX account contract
  const accountResponse = await defaultProvider.deployContract({
    contract: compiledOZAccount as CompiledContract,
    constructorCalldata: [starkKeyPub],
    addressSalt: starkKeyPub,
  });

  console.log('accountResponse :>> ', accountResponse);

  // Wait for the deployment transaction to be accepted on StarkNet
  console.log('Waiting for Tx to be Accepted on Starknet - Argent Account Deployment...');
  await defaultProvider.waitForTransaction(accountResponse.transaction_hash);

  console.log('account_contract_address: ', accountResponse.address);

  return {
    accountAddress: accountResponse.address,
    privateKey: '0x' + starkKeyPair.getPrivate('hex'),
  };
}

/**
 * Function set token URI after mint by the account contract that owns this ERC721 contract
 *
 * @param accContract - the Openzeppline account contract (master account contract) which is the owner of ERC721 contract
 * @param pvKey - private key of the Openzeppline account contract
 * @param ERC721Addr - the ERC721 contract address
 * @param tkID - Token ID
 * @param cidV0 - Token URI
 *
 */
export async function setTokenURI_by_contract_owner(
  accContract: string,
  pvKey: string,
  ERC721Addr: string,
  tkID: number,
  amount: number,
  cidV0: string,
): Promise<string> {
  console.log('Reading Argent Account Contract...');
  const starkKeyPair = ec.getKeyPair(pvKey);

  // convert CID_V0 to contentHash 32byte
  const CIDhash = CID.parse(cidV0);
  const cid = CIDhash.toV1().toString(base16.encoder);
  const cidLength = cid.length;
  let contentHash = cid.slice(cidLength - 64, cidLength + 1);

  contentHash = `0x${contentHash}`;

  const uintHash = bnToUint256(contentHash);

  //  Use your new account address
  const myAccount = new Account(defaultProvider, accContract, starkKeyPair);

  // console.log("nonce: ", toBN(await myAccount.getNonce()));

  console.log('contract address: ', myAccount.address);

  // Get the erc721 contract address
  const erc721Address = ERC721Addr;

  const nonce = await myAccount.getNonce();

  const calls = [];

  for (let index = 0; index < amount; index++) {
    const uintTokenId = bnToUint256(tkID + index);
    calls.push({
      contractAddress: erc721Address,
      entrypoint: 'setTokenURI',
      calldata: [uintTokenId.low, uintTokenId.high, uintHash.low, uintHash.high],
    });
  }

  /*-----------------------------------------------------------------------*/

  const calldataWithNonce = fromCallsToExecuteCalldataWithNonce(calls, nonce);

  const msgHash = hash.calculcateTransactionHash(
    myAccount.address,
    hash.transactionVersion,
    hash.getSelectorFromName('__execute__'),
    calldataWithNonce,
    '2',
    StarknetChainId.TESTNET,
  );

  console.log(`Invoke Tx - mint token back to erc721 contract...`);

  const { transaction_hash: transferTxHash } = await myAccount.execute(calls);

  console.log(`Waiting for Tx to be Accepted on Starknet - Transfer...`);
  console.log('hash >>: ', transferTxHash);
  await defaultProvider.waitForTransaction(transferTxHash);

  console.log(`Tx was Accepted on Starknet - successful!`);

  return transferTxHash;
}

/**
 * Function set token URI after mint by the account contract that owns this ERC721 contract
 *
 * @param NFTOnwerAccAdr - the Openzeppline account contract address which is the owner of the NFT
 * @param toAccAdr - the target account address that will receive the NFT
 * @param pvKey - private key of the Openzeppline account contract
 * @param ERC721Addr - the ERC721 contract address
 * @param tkID - Token ID
 *
 *
 */
export async function transfer_by_NFT_owner(
  NFTOnwerAccAdr: string,
  toAccAdr: string,
  pvKey: string,
  ERC721Addr: string,
  tkID: number,
): Promise<string> {
  console.log('Reading Argent Account Contract...');
  const starkKeyPair = ec.getKeyPair(pvKey);
  const starkKeyPub = ec.getStarkKey(starkKeyPair);

  //  Use your new account address
  const myAccount = new Account(defaultProvider, NFTOnwerAccAdr, starkKeyPair);

  const nonce = await myAccount.getNonce();

  // Get the erc20 contract address
  const erc721Address = ERC721Addr;

  //  // Mint 1000 tokens to accountContract address
  const uintAmount = bnToUint256(tkID);

  // Get the nonce of the account and prepare transfer tx
  console.log(`Calling StarkNet for accountContract nonce...`);

  const calls = [
    {
      contractAddress: erc721Address,
      entrypoint: 'transferFrom',

      calldata: [NFTOnwerAccAdr, toAccAdr, uintAmount.low, uintAmount.high],
    },
  ];

  const calldataWithNonce = fromCallsToExecuteCalldataWithNonce(calls, nonce);

  const msgHash = hash.calculcateTransactionHash(
    myAccount.address,
    hash.transactionVersion,
    hash.getSelectorFromName('__execute__'),
    calldataWithNonce,
    '2',
    StarknetChainId.TESTNET,
  );

  console.log(`Invoke Tx - mint token back to erc721 contract...`);

  const { transaction_hash: transferTxHash } = await myAccount.execute(calls);

  console.log(`Waiting for Tx to be Accepted on Starknet - Transfer...`);
  console.log('hash >>: ', transferTxHash);
  await defaultProvider.waitForTransaction(transferTxHash);

  console.log(`Tx was Accepted on Starknet - successful!`);

  return transferTxHash;
}

/**
 * Function set token URI after mint by the account contract that owns this ERC721 contract
 *
 * @param privateKey - private key of the Openzeppline account contract
 * @param accContract - the Openzeppline account contract address (master account contract) which is the owner of ERC721 contract
 * @param erc721Addr - the ERC721 contract address
 * @param _tokenID - Token ID
 * @param _mintTo - the target Openzeppline account contract address that will own this NFT
 *
 */
export async function mint_with_owner(
  privateKey: string,
  accContract: string,
  erc721Addr: string,
  _tokenID: number,
  _amount: number,
  _mintTo: string,
): Promise<string> {
  console.log('Reading Account Contract...');
  const starkKeyPair = ec.getKeyPair(privateKey);
  const starkKeyPub = ec.getStarkKey(starkKeyPair);

  //  Use your new account address
  const myAccount = new Account(defaultProvider, accContract, starkKeyPair);

  // Get the erc721 contract address
  const erc721Address = erc721Addr;

  const nonce = await myAccount.getNonce();

  //prepair calldata
  const calls = [];

  for (let index = 0; index < _amount; index++) {
    const uintAmount = bnToUint256(_tokenID + index);
    console.log('uintAmount', uintAmount);
    calls.push({
      contractAddress: erc721Address,
      entrypoint: 'mint',
      calldata: [number.toFelt(_mintTo), uintAmount.low, uintAmount.high],
    });
  }
  /*-----------------------------------------------------------------------*/

  const calldataWithNonce = fromCallsToExecuteCalldataWithNonce(calls, nonce);

  const msgHash = hash.calculcateTransactionHash(
    myAccount.address,
    hash.transactionVersion,
    hash.getSelectorFromName('__execute__'),
    calldataWithNonce,
    '2',
    StarknetChainId.TESTNET,
  );

  console.log(`Invoke Tx - mint token back to erc721 contract...`);

  const { transaction_hash: transferTxHash } = await myAccount.execute(calls);

  console.log(`Waiting for Tx to be Accepted on Starknet - Transfer...`);
  console.log('hash >>: ', transferTxHash);
  await defaultProvider.waitForTransaction(transferTxHash);

  console.log(`Tx was Accepted on Starknet - successful!`);

  return transferTxHash;
}

/**
 * Function set token URI after mint by the account contract that owns this ERC721 contract
 *
 * @param onwerContractAdr - the Argent contract address that will be the ovner of ERC721 contract
 * @returns ERC721 contract address
 *
 */
export async function deploy_ERC721(ownerContractAdr: string): Promise<string> {
  console.log('Reading ERC721 Contract...');

  // Deploy an ERC20 contract and wait for it to be verified on StarkNet.
  console.log('Deployment Tx - ERC721 Contract to StarkNet...');
  const erc721Response = await defaultProvider.deployContract({
    contract: compiledErc721 as CompiledContract,
    constructorCalldata: ['0x436F64654C696768744E4654', '0x434C4E', number.toFelt(ownerContractAdr)],
  });

  // Wait for the deployment transaction to be accepted on StarkNet
  console.log('Waiting for Tx to be Accepted on Starknet - ERC721 Deployment...');
  await defaultProvider.waitForTransaction(erc721Response.transaction_hash);

  console.log(`Tx was Accepted on Starknet - successful!`);

  return erc721Response.address;
}

/**
 * Function burns token
 *
 * @param NFTOnwerAccAdr - the Openzeppline account contract address which is the owner of the NFT
 * @param toAccAdr - the target account address that will receive the NFT
 * @param pvKey - private key of the Openzeppline account contract
 * @param ERC721Addr - the ERC721 contract address
 * @param tkID - Token ID
 *
 *
 */
export async function burn_token(
  NFTOnwerAccAdr: string,
  pvKey: string,
  ERC721Addr: string,
  tkID: number,
): Promise<string> {
  console.log('Reading Argent Account Contract...');
  const starkKeyPair = ec.getKeyPair(pvKey);

  //  Use your new account address
  const myAccount = new Account(defaultProvider, NFTOnwerAccAdr, starkKeyPair);

  // console.log("nonce: ", toBN(await myAccount.getNonce()));

  const nonce = await myAccount.getNonce();
  // Get the erc20 contract address
  const erc721Address = ERC721Addr;

  const uintAmount = bnToUint256(tkID);

  // Get the nonce of the account and prepare transfer tx
  console.log(`Calling StarkNet for accountContract nonce...`);

  const calls = [
    {
      contractAddress: erc721Address,
      entrypoint: 'burn',

      calldata: [uintAmount.low, uintAmount.high],
    },
  ];

  const calldataWithNonce = fromCallsToExecuteCalldataWithNonce(calls, nonce);

  const msgHash = hash.calculcateTransactionHash(
    myAccount.address,
    hash.transactionVersion,
    hash.getSelectorFromName('__execute__'),
    calldataWithNonce,
    '2',
    StarknetChainId.TESTNET,
  );

  console.log(`Invoke Tx - mint token back to erc721 contract...`);

  const { transaction_hash: transferTxHash } = await myAccount.execute(calls);

  console.log(`Waiting for Tx to be Accepted on Starknet - Transfer...`);
  console.log('hash >>: ', transferTxHash);
  await defaultProvider.waitForTransaction(transferTxHash);

  console.log(`Tx was Accepted on Starknet - successful!`);

  return transferTxHash;
}

export async function get_event(accContract: string, pvKey: string) {
  console.log('Reading Argent Account Contract...');
  const starkKeyPair = ec.getKeyPair(pvKey);

  //  Use your new account address
  const accountContract = new Contract(compiledOZAccount.abi as Abi, accContract);
}

/**
 * Function get token URI
 *
 * @param ERC721Addr - the ERC721 contract address
 * @param tkID - Token ID
 *
 */
export async function getTokenURI_by_contract_owner(ERC721Addr: string, tkID: number): Promise<object> {
  console.log('Reading ERC721 Contract...');

  // Get the erc721 contract address
  const erc721Address = ERC721Addr;

  const uintAmount = bnToUint256(tkID);
  console.log(`get contract `);

  // Create a new erc721 contract object
  const erc721 = new Contract(compiledErc721.abi as Abi, erc721Address);

  console.log(`Invoke Tx - Minting 1000 tokens to `);
  const tkURI = await erc721.tokenURI([uintAmount.low, uintAmount.high]);

  return {
    metadata: tkURI.tokenURI,
    tokenUri: uint256ToBN(tkURI.tokenURI).toString('hex'),
  };
}

export async function withdraw(
  pvKey: string,
  NFTOnwerAccAdr: string,
  ERC721Addr: string,
  tkID: number,
  l1AccountAddress: string,
): Promise<string> {
  console.log('Reading Argent Account Contract...');
  const starkKeyPair = ec.getKeyPair(pvKey);

  //  Use your new account address
  const myAccount = new Account(defaultProvider, NFTOnwerAccAdr, starkKeyPair);

  // Get the erc721 contract address
  const erc721Address = ERC721Addr;

  const nonce = await myAccount.getNonce();

  // Get the erc20 contract address

  const uintAmount = bnToUint256(tkID);

  const L1_erc721_contract_address = '0xeE16740C93807E9C4d9dF293548E93d331AdD918';

  const calls = [
    {
      contractAddress: erc721Address,
      entrypoint: 'withdraw',

      calldata: [l1AccountAddress, uintAmount.low, uintAmount.high, L1_erc721_contract_address],
    },
  ];

  const calldataWithNonce = fromCallsToExecuteCalldataWithNonce(calls, nonce);

  const msgHash = hash.calculcateTransactionHash(
    myAccount.address,
    hash.transactionVersion,
    hash.getSelectorFromName('__execute__'),
    calldataWithNonce,
    '2',
    StarknetChainId.TESTNET,
  );

  console.log(`Invoke Tx - mint token back to erc721 contract...`);

  const { transaction_hash: transferTxHash } = await myAccount.execute(calls);

  console.log(`Waiting for Tx to be Accepted on Starknet - Transfer...`);
  console.log('hash >>: ', transferTxHash);
  await defaultProvider.waitForTransaction(transferTxHash);

  console.log(`Tx was Accepted on Starknet - successful!`);

  return transferTxHash;
}

export function highAndLow(contentHash: string) {
  const uintHash = bnToUint256(contentHash);
  console.log(uintHash);
}

export async function owner_multi_call(privateKey: string, accContract: string, calls: any[]): Promise<string> {
  console.log('Reading Account Contract...');
  const starkKeyPair = ec.getKeyPair(privateKey);
  const starkKeyPub = ec.getStarkKey(starkKeyPair);

  //  Use your new account address
  const myAccount = new Account(defaultProvider, accContract, starkKeyPair);

  console.log('myAccount: ', myAccount.address);

  const nonce = await myAccount.getNonce();
  console.log('nonce: ', nonce);

  /*-----------------------------------------------------------------------*/

  const calldataWithNonce = fromCallsToExecuteCalldataWithNonce(calls, nonce);

  const msgHash = hash.calculcateTransactionHash(
    myAccount.address,
    hash.transactionVersion,
    hash.getSelectorFromName('__execute__'),
    calldataWithNonce,
    '2',
    StarknetChainId.TESTNET,
  );

  console.log(`Invoke Tx - mint token back to erc721 contract...`);

  const { transaction_hash: transferTxHash } = await myAccount.execute(calls);

  console.log(`Waiting for Tx to be Accepted on Starknet - Transfer...`);
  console.log('hash >>: ', transferTxHash);
  await defaultProvider.waitForTransaction(transferTxHash);

  console.log(`Tx was Accepted on Starknet - successful!`);

  return transferTxHash;
}
