import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";
function Navbar(props) {
  return (
    <div className="navbar-cont">
      <div className="navbar-left">
        <Link to="/all" className="link-txt">
          <div>Secure Share</div>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/keygen" className="link-txt">
          <div>Key Generation</div>
        </Link>
        <Link to="/upload" className="link-txt">
          <div>Upload</div>
        </Link>
        <Link to="/download" className="link-txt">
          <div>Download</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
