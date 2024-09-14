require('dotenv').config();
const express = require('express');
const { ethers } = require('@vechain/ethers');
const { registerSubmission } = require('./utils');

const app = express();
app.use(express.json());

const provider = new ethers.providers.JsonRpcProvider(process.env.TESTNET_URL);
const mnemonic = process.env.MNEMONIC;
const wallet = ethers.Wallet.fromMnemonic(mnemonic).connect(provider);

const contractABI = require('./abis/EcoEarnABI.json');
const ecoearnAddress = process.env.ECOEARN_CONTRACT_ADDRESS;

const ecoearncontract = new ethers.Contract(ecoearnAddress, contractABI, wallet);

app.get('/', (req, res) => {
  res.send('Hello, World from Express!');
});


app.post('/distribute-rewards', async (req, res) => {
  const { amount, walletAddress } = req.body;

  if (!amount || !walletAddress) {
    return res.status(400).json({ error: 'Amount and wallet address are required' });
  }
  const submission = {
    walletAddress: walletAddress,
    amount: amount
  };

  try {
    const { isSuccess, txID } = await registerSubmission(submission);
    if (isSuccess) {
      res.status(200).json({ message: 'Reward distributed successfully!', txID });
  } else {
      res.status(500).json({ message: 'Failed to distribute rewards.', txID });
  }
  } catch (error) {
    console.error('Error during submission:', error);
    res.status(500).json({ error: 'An error occurred during reward distribution.' });
  }
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

