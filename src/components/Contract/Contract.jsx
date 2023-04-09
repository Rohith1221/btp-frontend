import React, { useState } from "react";
import Web3 from "web3";
import * as ethers from "ethers";
import "./ipfs.css";
import CONTRACT_ABI from "./SimpleContract.json";

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

function App() {
  const [ipfsHash, setIpfsHash] = useState("");
  const CONTRACT_ADDRESS = "0x08B2C6DBc543654b4be3884f56ADdB092399eEf9";
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );
      const transaction = await contract.setIPFSHash(ipfsHash);
      await transaction.wait();
      console.log("Transaction confirmed");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="ipfshash_cont">
      <form onSubmit={handleSubmit}>
        <label>
          IPFS Hash:
          <input
            type="text"
            value={ipfsHash}
            onChange={(e) => setIpfsHash(e.target.value)}
            style={{ textAlign: "center" }}
          />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
