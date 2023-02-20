import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";
function Navbar(props) {
  return (
    <div className="navbar-cont">
      <div className="navbar-left">
        <div>
          <Link to="/all" className="link-txt">
            Secure Share
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <div>
          <Link to="/keygen" className="link-txt">
            Key Generation
          </Link>
        </div>
        <div>
          <Link to="/upload" className="link-txt">
            Upload
          </Link>
        </div>
        <div>
          <Link to="/download" className="link-txt">
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
