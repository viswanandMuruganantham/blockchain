import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Wallet from './contracts/Wallet.json';


function App() {
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState(0);
    const [walletContract, setWalletContract] = useState(null);

    useEffect(() => {
        loadBlockchainData();
    }, []);

    const loadBlockchainData = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);

                const networkId = await web3.eth.net.getId();
                const deployedNetwork = Wallet.networks[networkId];
                const contract = new web3.eth.Contract(
                    Wallet.abi,
                    deployedNetwork && deployedNetwork.address
                );
                setWalletContract(contract);

                const balance = await contract.methods.checkBalance().call({ from: accounts[0] });
                setBalance(balance);
            } catch (error) {
                console.error("User denied account access");
            }
        } else {
            alert('Install Metamask to interact!');
        }
    };

    const handleDeposit = async () => {
        await walletContract.methods.deposit().send({
            from: account,
            value: Web3.utils.toWei('0.1', 'ether')
        });
        loadBlockchainData();
    };

    const handleWithdraw = async () => {
        await walletContract.methods.withdraw(Web3.utils.toWei('0.05', 'ether')).send({ from: account });
        loadBlockchainData();
    };

    return (
        <div>
            <h1>Blockchain Wallet</h1>
            <p><b>Account:</b> {account}</p>
            <p><b>Balance:</b> {Web3.utils.fromWei(balance.toString(), 'ether')} ETH</p>
            <button onClick={handleDeposit}>Deposit 0.1 ETH</button>
            <button onClick={handleWithdraw}>Withdraw 0.05 ETH</button>
        </div>
    );
}

export default App;
