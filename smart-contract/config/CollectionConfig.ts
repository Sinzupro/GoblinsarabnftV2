import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'GoblinsarabsNFT',
  tokenName: 'GoblinsarabsNFT',
  tokenSymbol: 'GBN',
  hiddenMetadataUri: 'ipfs://QmQohoCyWCHpWZXAjq4m1RJ8N5nCCTiuHrNPaUfN1o3ayn',
  maxSupply: 5500,
  whitelistSale: {
    price: 0.001,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.002,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.003,
    maxMintAmountPerTx: 10,
  },
  contractAddress:null,
  marketplaceIdentifier: 'GoblinsarabsNFT',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
