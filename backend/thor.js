require('dotenv').config();

const { HttpClient, ThorClient, VeChainPrivateKeySigner, VeChainProvider } = require('@vechain/sdk-network');
const { mnemonic } = require('@vechain/sdk-core');

const contractABI = require('./abis/EcoEarnABI.json');
const ecoearnAddress = process.env.ECOEARN_CONTRACT_ADDRESS;

const ADMIN_PRIVATE_KEY= mnemonic.derivePrivateKey(process.env.MNEMONIC.split(' '))

const thor = new ThorClient(new HttpClient(process.env.TESTNET_URL), {
  isPollingEnabled: false,
});

// Initialize the ecoEarnContract using the contract address and ABI
const ecoEarnContract = thor.contracts.load(
    ecoearnAddress,
  contractABI,
  new VeChainPrivateKeySigner(Buffer.from(ADMIN_PRIVATE_KEY, 'hex'), new VeChainProvider(thor))
);

module.exports = {
  thor,
  ecoEarnContract,
};
