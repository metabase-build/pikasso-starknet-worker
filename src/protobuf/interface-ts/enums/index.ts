export enum Role {
  User = 'user',
  Admin = 'admin',
}

export enum EStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum EUserStatus {
  ACTIVE = 'active',
  IN_ACTIVE = 'in_active',
  VERIFY_EMAIL = 'verify_email',
  VERIFY_WALLET = 'verify_wallet',
  INIT_USER = 'init_user',
}

export enum EUserPlanStatus {
  ACTIVE = 'active',
  TRIAL = 'trial',
  IN_ACTIVE = 'in_active',
  CANCEL = 'cancel',
}

export const ETokenTypes = {
  ACCESS: 'access',
  REFRESH: 'refresh',
  RESET_PASSWORD: 'resetPassword',
  VERIFY_EMAIL: 'verifyEmail',
};

export enum EPlayerStatus {
  SIGNUP_EMAIL = 'SIGNUP_EMAIL',
  MISSING_WALLET = 'MISSING_WALLET',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum EProvider {
  MORALIS = 'moralis',
  COINMARKETCAP = 'coinmarketcap',
  COINGEKCO = 'coingecko',
  CRYPTOCOMPARE = 'cryptocompare',
  KRAKEN = 'kraken',
}

export enum EAdminQueueEvent {
  ADMIN_DEPLOY_CONTRACT = 'deploy_erc721_contract',
  ADMIN_TRANSFER_TOKEN = 'transfer_native_token',
}

export enum EQueueEvent {
  // Rinkeby
  RINKEBY_CREATE_PROJECT = 'goerli.create_project',
  RINKEBY_CREATE_COLLECTION = 'goerli.create_collection',
  RINKEBY_CREATE_NFT = 'goerli.create_NFT',
  RINKEBY_CREATE_NFT_1155 = 'goerli.create_NFT_1155',
  RINKEBY_DEPLOY_ERC721_CONTRACT = 'goerli.deploy_erc721_contract',
  RINKEBY_DEPLOY_ERC1155_CONTRACT = 'goerli.deploy_erc1155_contract',
  RINKEBY_ASSIGN_NFT_TO_PLAYER = 'goerli.assign_nft_to_player',
  RINKEBY_ASSIGN_NFTS_TO_PLAYER = 'goerli.assign_nfts_to_player',
  RINKEBY_ASSIGN_NFT_1155_TO_PLAYER = 'goerli.assign_nft_1155_to_player',
  RINKEBY_ASSIGN_NFTS_1155_TO_PLAYER = 'goerli.assign_nfts_1155_to_player',
  RINKEBY_BUY_PREPARE = 'goerli.buy_prepare',
  RINKEBY_SELL_PREPARE = 'goerli.sell_prepare',
  RINKEBY_ADMIN_TRANSFER_TOKEN = 'goerli.transfer_native_token',
  RINKEBY_WITHDRAW_NFT = 'goerli.withdraw_nft',

  // Starknet
  STARKNET_ADMIN_DEPLOY_ERC721_CONTRACT = 'starknet.deploy_erc721_contract',
  STARKNET_ADMIN_TRANSFER_TOKEN = 'starknet.transfer_native_token',
  STARKNET_CREATE_NFT = 'starknet.create_NFT',
  STARKNET_WITHDRAW_NFT = 'starknet.withdraw_nft',
  STARKNET_ASSIGN_NFT_TO_PLAYER = 'starknet.assign_nft_to_player',

  // Stripe
  UPGRADE_ACCOUNT = 'upgrade account',
  STRIPE_FAILED_HANDLER = 'stripe.failed_handler',
  STRIPE_SUCCEEDED_HANDLER = 'stripe.succeeded_handler',
  STRIPE_COMPLETED_HANDLER = 'stripe.completed_handler',
  STRIPE_EXPIRED_HANDLER = 'stripe.expired_handler',
  STRIPE_CREATE_SUBSCRIPTION = 'stripe.create_subscription',
  STRIPE_DELETE_SUBSCRIPTION = 'stripe.delete_subscription',
  STRIPE_PENDING_SUBSCRIPTION = 'stripe.pending_subscription',
  STRIPE_UPDATE_SUBSCRIPTION = 'stripe.update_subscription',
  STRIPE_END_TRIAL_SUBSCRIPTION = 'stripe.end_trial_subscription',

  // Polygon
  POLYGON_CREATE_PROJECT = 'polygon.create_project',
  POLYGON_DEPLOY_ERC721_CONTRACT = 'polygon.deploy_erc721_contract',
  POLYGON_CREATE_NFT = 'polygon.create_NFT',
  POLYGON_CREATE_NFT_1155 = 'polygon.create_NFT_1155',
  POLYGON_ASSIGN_NFT_TO_PLAYER = 'polygon.assign_nft_to_player',
  POLYGON_ASSIGN_NFT_1155_TO_PLAYER = 'polygon.assign_nft_1155_to_player',
  POLYGON_ASSIGN_NFTS_TO_PLAYER = 'polygon.assign_nft_to_player',
  POLYGON_ASSIGN_NFTS_1155_TO_PLAYER = 'polygon.assign_nft_to_player',

  // BSC
  BSC_CREATE_PROJECT = 'bsct.create_project',
  BSC_DEPLOY_ERC721_CONTRACT = 'bsct.deploy_erc721_contract',
  BSC_CREATE_NFT = 'bsct.create_NFT',
  BSC_CREATE_NFT_1155 = 'bsct.create_NFT_1155',
  BSC_ASSIGN_NFT_TO_PLAYER = 'bsct.assign_nft_to_player',
  BSC_ASSIGN_NFTS_TO_PLAYER = 'bsct.assign_nfts_to_player',
  BSC_ASSIGN_NFT_1155_TO_PLAYER = 'bsct.assign_nft_1155_to_player',
  BSC_ASSIGN_NFTS_1155_TO_PLAYER = 'bsct.assign_nfts_1155_to_player',

  // ONE
  ONE_CREATE_PROJECT = 'one.create_project',
  ONE_DEPLOY_ERC721_CONTRACT = 'one.deploy_erc721_contract',
  ONE_CREATE_NFT = 'one.create_NFT',
  ONE_CREATE_NFT_1155 = 'one.create_NFT_1155',
  ONE_ASSIGN_NFT_TO_PLAYER = 'one.assign_nft_to_player',
  ONE_ASSIGN_NFT_1155_TO_PLAYER = 'one.assign_nft_1155_to_player',
  ONE_ASSIGN_NFTS_TO_PLAYER = 'one.assign_nfts_to_player',
  ONE_ASSIGN_NFTS_1155_TO_PLAYER = 'one.assign_nfts_1155_to_player',

  // Solana
  SOLANA_CREATE_PROJECT = 'solana.create_project',
  SOLANA_CREATE_NFT = 'solana.create_NFT',
  SOLANA_CREATE_NFT_1155 = 'solana.create_NFT_1155',
  SOLANA_ASSIGN_NFT_TO_PLAYER = 'solana.assign_nft_to_player',
  SOLANA_ASSIGN_NFT_1155_TO_PLAYER = 'solana.assign_nft_1155_to_player',
  SOLANA_ASSIGN_NFTS_TO_PLAYER = 'solana.assign_nfts_to_player',
  SOLANA_ASSIGN_NFTS_1155_TO_PLAYER = 'solana.assign_nfts_1155_to_player',

  // Offchain
  OFFCHAIN_CREATE_PROJECT = 'offchain.create_project',
  OFFCHAIN_CREATE_NFT = 'offchain.create_NFT',
  OFFCHAIN_BUY_PREPARE = 'offchain.buy_prepare',
  OFFCHAIN_SELL_PREPARE = 'offchain.sell_prepare',
}

export enum EChain {
  STARKNET = 'starknet',
  ETHEREUM = 'ethereum',
  GOERLI = 'goerli',
  ZKSYNC = 'zksync',
  SOLANA = 'solana',
  POLYGON = 'polygon',
  BSCT = 'bsct',
  ONE = 'one',
  OFFCHAIN = 'offchain',
}

export enum Category {
  ART = 'art',
  COLLECTIBLE = 'collectible',
}

export enum ETokenStatus {
  DELETED = 'deleted',
  CREATE_OFF_CHAIN = 'create_off_chain',
  MINTING = 'minting',
  TRANSFERING = 'transfering',
  SUCCESS = 'success',
  FAILED = 'failed',
  TRANSFER_SUCCESS = 'transfer_success',
  TRANSFER_FAILED = 'transfer_failed',
  WITHDRAWN = 'withdrawn',
  WITHDRAWN_TO_L1 = 'withdrawn to L1',
}

export enum EProjectStatus {
  CREATING_ACCOUNT = 'creating_account',
  CREATING_ERC721_CONTRACT = 'creating_erc721_contract',
  FAILED = 'failed',
  SUCCESS = 'success',
}

export enum CollectionStatus {
  COLLECTION_CREATED_OFF_CHAIN = 'collection_created_off_chain',
  COLLECTION_UPDATING_MASTER_ACCOUNT = 'collection_updating_master_account',
  COLLECTION_DEPLOYING_CONTRACT = 'collection_deploying_contract',
  COLLECTION_CREATED_ON_CHAIN = 'colleciton_created_on_chain',
  COLLECTION_INACTIVE = 'collection_inactive',
}

export enum ETransactionGroupStatus {
  WAITING_FOR_PAYMENT = 'waiting_for_payment',
  PAYMENT_CREATED = 'payment_created',
  PAYMENT_SUCCESS = 'payment_success',
  PAYMENT_CANCEL = 'payment_cancel',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum ETransactionStatus {
  WAITING_FOR_CONFIRMATION = 'waiting_for_confirmation',
  LOCK = 'lock',
  INQUEUE = 'inqueue',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum ENftType {
  ERC721 = 'erc721',
  ERC1155 = 'erc1155',
}

export enum EWidgetType {
  BUTTON = 'button',
  LIST = 'list',
  CARD = 'card',
}

export enum ESortOrder {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum EOrderType {
  SELL = 'sell',
  BUY = 'buy',
}

export enum EOrderStatus {
  PENDING = 'pending', //can adjust in this state
  ACTIVE = 'active', // have to delete to update in this state
  LOCKING = 'locking',
  COMPLETE = 'complete',
  CANCEL = 'cancel',
}

export enum EPriceType {
  SELL = 'sell',
  BUY = 'buy',
  CAMPAIGN = 'campaign',
}

export enum EPriceStatus {
  PENDING = 'pending', //can adjust in this state
  ACTIVE = 'active', // have to delete to update in this state
  INACTIVE = 'inactive', //this status is set when another price of same nft is set to complete
  IN_PAYMENT = 'in_payment',
  COMPLETE = 'complete',
  CANCEL = 'cancel',
}

export enum ECurrency {
  USD = 'usd',
}

export enum EPaymentStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  EXPIRED = 'expired',
  CANCEL = 'cancel',
}

export enum EExchangeStatus {
  CREATED = 'created',
  FAILED = 'failed',
  REMOVED = 'removed',
}

export enum ENftExchangeStatus {
  CREATED = 'created',
  FAILED = 'failed',
  CANCEL = 'cancel',
}

export enum EPaymentProvider {
  STRIPE = 'stripe',
}

export enum EPaymentJobFunction {
  BUY_NFT = 'buy_nft',
  PUBLISH_NFT = 'publish_nft',
  UPGRADE_ACCOUNT = 'upgrade_account',
  CANCEL_BUSINESS_ACCOUNT = 'cancel_business_account',
  WITHDRAW_NFT = 'withdraw_nft',
  ADD_CARD = 'add_card',
}

export enum ENftFilter {
  CREATED = 'created',
  MINTED = 'minted',
  MINTING = 'minting',
  AUCTION = 'auction',
  ON_SALE = 'on_sale',
}

export enum EMarketNftFilter {
  AUCTION = 'auction',
  ON_SALE = 'on_sale',
}

export enum BillingPeriod {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export enum AccountPlan {
  BUSINESS = 'business',
  DEFAULT = 'default',
}

export enum StripeSubscriptionStatus {
  TRIAL = 'trialing',
  PAST_DUE = 'past_due',
  ACTIVE = 'active',
}

export enum WalletTypeTransaction {
  DEPOSIT = 'deposit',
  TRANSFER = 'transfer',
}

export enum CancelPlanReason {
  REASON_1 = "No longer using Pikasso 's products ",
  REASON_2 = 'Project is over or longer active',
  REASON_3 = 'Too expensive',
  REASON_4 = 'Billing structure is unclear',
  REASON_5 = 'Did not mean to upgrade',
}

export enum Region {
  VIETNAM = 'Vietnam',
  USA = 'United States',
}

export enum CardType {
  VISA = 'Visa',
  MASTERCARD = 'Mastercard',
}

export enum ECampaignStatus {
  ACTIVE = 'active',
  CANCEL = 'cancel',
  PENDING = 'pending',
}

export enum ECategoryStatus {
  ACTIVE = 'active',
  IN_ACTIVE = 'in_active',
}

export enum EWebhookStatus {
  ACTIVE = 'active',
  IN_ACTIVE = 'in_active',
}

export enum EWebhookEvents {
  COLLECTION_CREATED = 'collection.created',
}
