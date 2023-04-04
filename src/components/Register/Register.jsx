import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://dfssuiab-backend-production.up.railway.app/app/registration/",
        {
          email,
          password,
        }
      )
      .then((response) => {
        console.log(response.data);
        const { access_token } = response.data.data;
        console.log(access_token);
        localStorage.setItem("accessToken", access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("ERR: ", error);
      });
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>email</label>
            <input
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              type="text"
              value={email}
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
