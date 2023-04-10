import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./upload.css";

import Web3 from "web3";

import * as ethers from "ethers";
import "./ipfs.css";
import CONTRACT_ABI from "./SimpleContract.json";

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

function Upload(props) {
  const authToken = localStorage.getItem("accessToken");

  const [location, setLocation] = useState({ title: "", image: "" });
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose file");

  const [IPFShash, setIPFShash] = useState("");

  const [pubKey, setPubKey] = useState("");
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setLocation({ ...location, [e.target.name]: e.target.value });
    console.log(e.target.files[0]["name"]);
  };
  const handlePublicKey = (e) => {
    setPubKey(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("public_key", pubKey);
    formData.append("document", file);
    formData.append("file_name", filename);

    console.log(FormData);

    axios
      .post(
        "https://dfssuiab-backend-production.up.railway.app/app/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // set the content type to multipart/form-data
            Authorization: `Bearer ${authToken}`, // include the token in the headers
          },
        }
      )
      .then((response) => {
        const { ipfs_hash } = response.data.data;
        console.log(response.data);
        setIPFShash(ipfs_hash);
        console.log(ipfs_hash);
        document.getElementById("ipfsinput").value = ipfs_hash;
        // document.getElementById("submitIPFShash").click();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const CONTRACT_ADDRESS = "0x08B2C6DBc543654b4be3884f56ADdB092399eEf9";
  // const CONT_ADD = process.env.REACT_APP_CONTRACT_ADD;
  // const CONTRACT_ADDRESS = web3.utils.toHex(CONT_ADD);

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
      const transaction = await contract.setIPFSHash(IPFShash);
      await transaction.wait();
      console.log("Transaction confirmed");
    } catch (error) {
      console.error(error);
    }
  }

  const handleFunc = () => {};

  return (
    <div class="container cont-upload">
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="pubkey">
          <Form.Label>Public Key</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Public Key"
            onChange={handlePublicKey}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="inputfile">
          <Form.Label>File</Form.Label>
          <Form.Control
            type="file"
            placeholder="choose file"
            onChange={onChangeFile}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleFunc}>
          Submit
        </Button>
      </Form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {IPFShash && (
          <p>
            <b>IPFS hash :</b> {IPFShash}
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit} style={{ display: "" }}>
        <label style={{ display: "none" }}>
          IPFS Hash:
          <input
            type="text"
            value={IPFShash}
            id="ipfsinput"
            onChange={(e) => setIPFShash(IPFShash)}
            style={{ textAlign: "center", display: "none" }}
          />
        </label>
        <Button
          variant="primary"
          type="submit"
          value="Submit"
          id="submitIPFShash"
          style={{ marginTop: "-120px" }}
        >
          Send Transaction
        </Button>
      </form>
    </div>
  );
}

export default Upload;
