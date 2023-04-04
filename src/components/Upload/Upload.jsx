import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./upload.css";

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
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

        <Button variant="primary" type="submit">
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
    </div>
  );
}

export default Upload;
