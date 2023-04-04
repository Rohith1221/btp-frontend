import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../navbar/navbar.css";
function Navbar(props) {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setIsAuth(true);
    }
    console.log("isAUTH: ", isAuth);
  }, [isAuth]);

  return (
    <div className="navbar-cont">
      <div className="navbar-left">
        {isAuth ? (
          <Link to="/all" className="link-txt">
            <div>Secure Share</div>
          </Link>
        ) : null}
      </div>
      <div className="navbar-right">
        {/*<Link to="/keygen" className="link-txt">
          <div>Key Generation</div>
        </Link>
        <Link to="/upload" className="link-txt">
          <div>Upload</div>
        </Link>
        <Link to="/download" className="link-txt">
          <div>Download</div>
  </Link> */}
        {isAuth ? (
          <Link to="/">
            <div>Home</div>
          </Link>
        ) : null}
        {isAuth ? (
          <Link to="/logout">
            <div>Logout</div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="login">Login</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
