import React from "react";
import { Download } from "../Download/Download";
import KeyGen from "../KeyGeneration/KeyGen";
import Upload from "../Upload/Upload";
import "./All.css";
import MetamaskConnect from "../Blockchain/MetamaskConnect";
import ContractComp from "../Contract/Contract";

function All(props) {
  return (
    <div>
      <h3>Key Generation</h3>
      <KeyGen />
      <h3>blockChain</h3>
      <MetamaskConnect />
      <h3>Upload</h3>
      <Upload />
      <h3>smart contract</h3>
      <ContractComp />
      <h3>Download</h3>
      <Download />
    </div>
  );
}

export default All;
