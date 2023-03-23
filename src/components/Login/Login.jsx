import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    let data;
    try {
      data = await axios.post(
        "https://dfssuiab-backend-production.up.railway.app/app/registration/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.log("ERROR: ", err);
    }
    let token = data.data.data.access_token;
    console.log(`Bearer ${token}`);
    console.log("token is :", data.data.data.access_token);
    localStorage.clear();
    localStorage.setItem("access_token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    window.location.href = "/";
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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
};
