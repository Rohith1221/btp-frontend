import React, { useState } from "react";
import Web3 from "web3";
import Button from "react-bootstrap/Button";
import "./mm.css";
import detectEthereumProvider from "@metamask/detect-provider";

function MetamaskConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    // Detect the Metamask provider
    const provider = await detectEthereumProvider();

    if (provider) {
      // Request access to the user's wallet
      await provider.request({ method: "eth_requestAccounts" });

      // Get the user's wallet address
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];

      // Update the state with the user's wallet address
      setWalletAddress(address);
    } else {
      alert("Please install Metamask to connect to this app.");
    }
  };

  return (
    <div className="metamask_cont">
      <Button onClick={connectWallet}>Connect Wallet</Button>
      {walletAddress && <p>Connected to wallet address: {walletAddress}</p>}
    </div>
  );
}

export default MetamaskConnect;
