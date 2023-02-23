import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./upload.css"


function Upload(props) {
  return  (
    
    <div class="container">
       
    <Form>
      <Form.Group className="mb-3" controlId="pubkey">
        <Form.Label>Public Key</Form.Label>
        <Form.Control type="text" placeholder="Enter Public Key" />
         
      </Form.Group>

      <Form.Group className="mb-3" controlId="inputfile">
        <Form.Label>File</Form.Label>
        <Form.Control type="file" placeholder="choose file" />
      </Form.Group>
       
      <Button variant="primary" type="submit"> 
        Submit
      </Button>
       
    </Form>
    </div>
     
  );
     
}

export default Upload;
