import React, { useState, useEffect } from "react";
import "./keygen.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Upload from "../Upload/Upload";

function KeyGen(props) {
  const [PublicKey, setPublicKey] = useState("");
  const [PrivateKey, setPrivateKey] = useState("");

  const generateKey = () => {
    console.log("key");
    const authToken = localStorage.getItem("accessToken");

    // make a GET request that uses the token
    axios
      .get(
        "https://dfssuiab-backend-production.up.railway.app/app/key-generation/",
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // include the token in the headers
          },
        }
      )
      .then((response) => {
        const { public_key } = response.data.data;
        const { private_key } = response.data.data;
        console.log("PUB key: ", public_key);
        console.log("PRVT key: ", private_key);
        setPublicKey(public_key);
        setPrivateKey(private_key);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      window.location.href = "/login";
    } else {
    }
  }, []);

  return (
    <div className="keygen_cont">
      <div>
        <center>
          <button
            onClick={generateKey}
            type="button"
            className="btn btn-primary btn-rounded"
          >
            Key Generation
          </button>
        </center>
      </div>
      <div className="pubkey_div">
        {PublicKey && (
          <p>
            <b>Public Key :</b> {PublicKey}
          </p>
        )}
      </div>
      <div className="">
        {PrivateKey && (
          <p>
            <b>Private Key :</b> {PrivateKey}
          </p>
        )}
      </div>
    </div>
  );
}

export default KeyGen;
