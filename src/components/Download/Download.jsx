import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./download.css";
var fileDownload = require("js-file-download");

export const Download = () => {
  const authToken = localStorage.getItem("accessToken");
  const [txHash, settxHash] = useState("");
  const [prvtKey, setprvtKey] = useState("");
  const handleIPFS = (e) => {
    settxHash(e.target.value);
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
          tx_hash: txHash,
        },
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${authToken}`, // include the token in the headers
          },
        }
      )
      .then((response) => {
        fileDownload(response.data, response.headers.file_name);
      })
      .catch((error) => {
        console.log("ERR: ", error);
      });
  };

  return (
    <div class="container cont-download">
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="txhash">
          <Form.Label>Transaction Hash</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Transaction Hash"
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
