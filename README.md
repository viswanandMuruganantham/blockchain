# Blockchain Wallet DApp  
A decentralized blockchain wallet application built using Solidity, React, and Web3.js. This project allows users to deposit, withdraw, and check their wallet balance seamlessly through a modern web interface integrated with MetaMask.

---

## Table of Contents
- [Overview]  
- [Features]  
- [Project Structure]  
- [Technologies Used]  
- [Setup and Installation]  
- [Smart Contract Deployment]  
- [Running the Frontend]  
- [MetaMask Configuration] 
- [Usage]  
- [Screenshots]
- [License]  

---

## Overview  
The Blockchain Wallet DApp is designed to simulate basic wallet operations like deposits and withdrawals on the Ethereum blockchain. Users can interact with the wallet through a React frontend, with Web3.js facilitating the communication between the blockchain and the application.  

---

## Features  
- **Deposit Funds** – Add Ether to your wallet.  
- **Withdraw Funds** – Withdraw Ether directly to your account.  
- **Balance Check** – View real-time wallet balance in Ether.  
- **MetaMask Integration** – Secure transactions and wallet interaction through MetaMask.  
- **Responsive Design** – User-friendly interface with a modern design.  

---

## Project Structure  
blockchain-wallet/ │ ├── contracts/ # Solidity smart contracts
│ └── Wallet.sol # Wallet contract logic
│ ├── migrations/ # Truffle migration scripts
│   └── 2_deploy_wallet.js
│ ├── wallet-frontend/ # React frontend
│ ├── src/
│ │ ├── App.js # Main React component
│ │ ├── App.css # CSS for frontend
│ │ └── contracts/ # Contract ABI
│ │ └── Wallet.json
│ └── public/ # Static frontend files
│ ├── test/ # Mocha/Chai contract tests
│ └── wallet.test.js
│ ├── truffle-config.js # Truffle configuration
├── package.json # Project dependencies
└── README.md # Project documentation
## Technologies Used  
- **Frontend**: React, Web3.js  
- **Backend**: Solidity (Smart Contracts)  
- **Blockchain Development**: Truffle, Ganache  
- **Wallet Integration**: MetaMask  

---

## Setup and Installation  

### Prerequisites  
- [Node.js](https://nodejs.org/)  
- [Truffle](https://trufflesuite.com/)  
- [Ganache](https://www.trufflesuite.com/ganache)  
- [MetaMask](https://metamask.io/) Extension
Smart Contract Deployment
1. Start Ganache
Run Ganache and ensure it listens at http://127.0.0.1:7545 (default RPC).

2. Deploy Contracts
bash
Copy code
truffle migrate --reset
Running the Frontend
bash
Copy code
cd wallet-frontend
npm start
The frontend will be available at http://localhost:3000.

MetaMask Configuration
Open MetaMask and go to Settings > Networks > Add Network.
Enter the following details:
yaml
Copy code
Network Name: Ganache  
RPC URL: http://127.0.0.1:7545  
Chain ID: 1337 or 5777  
Import an account by using the private key from Ganache.
Usage
Connect MetaMask to the Ganache network.
Access the app via http://localhost:3000.
Deposit or withdraw Ether using the provided buttons.
Wallet balance updates in real-time after every transaction.

Screenshots
![Screenshot 2025-01-04 181433](https://github.com/user-attachments/assets/f5aa6180-532a-4e4c-a773-34baf729824a)

Acknowledgments
Truffle Suite
Web3.js
Ethereum Community


