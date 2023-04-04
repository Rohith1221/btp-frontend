import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./download.css";
export const Download = () => {
  const authToken = localStorage.getItem("accessToken");

  const [ipfsHash, setipfsHash] = useState("");
  const [prvtKey, setprvtKey] = useState("");

  const handleIPFS = (e) => {
    setipfsHash(e.target.value);
  };

  const handlePrvtKey = (e) => {
    setprvtKey(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://dfssuiab-backend-production.up.railway.app/app/download/",
        {
          private_key: prvtKey,
          ipfs_hash: ipfsHash,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // include the token in the headers
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("ERR: ", error);
      });
  };

  return (
    <div class="container cont-download">
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="ipfshash">
          <Form.Label>IPFS Hash</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter IPFS Hash"
            onChange={handleIPFS}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="prikey">
          <Form.Label>Private Key</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Private Key"
            onChange={handlePrvtKey}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
