import React from "react";
import { Download } from "../Download/Download";
import KeyGen from "../KeyGeneration/KeyGen";
import Upload from "../Upload/Upload";

function All(props) {
  return (
    <div>
      <KeyGen />
      <Upload />
      <Download />
    </div>
  );
}

export default All;
