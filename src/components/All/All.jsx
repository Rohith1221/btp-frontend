import React from "react";
import { Download } from "../Download/Download";
import KeyGen from "../KeyGeneration/KeyGen";
import Upload from "../Upload/Upload";
import "./All.css";

function All(props) {
  return (
    <div>
      <h3>Key Generation</h3>
      <KeyGen />
      <h3>Upload</h3>
      <Upload />
      <h3>Download</h3>
      <Download />
    </div>
  );
}

export default All;
