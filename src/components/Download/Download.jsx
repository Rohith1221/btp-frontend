import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./download.css";
export const Download = () => {
  return (
    <div class="container cont-download">
      <Form>
        <Form.Group className="mb-3" controlId="ipfshash">
          <Form.Label>IPFS Hash</Form.Label>
          <Form.Control type="text" placeholder="Enter IPFS Hash" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="prikey">
          <Form.Label>Private Key</Form.Label>
          <Form.Control type="password" placeholder="Enter Private Key" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
