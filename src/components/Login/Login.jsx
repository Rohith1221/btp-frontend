import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    // e.preventDefault();

    // const user = {
    //   email: email,
    //   password: password,
    // };
    // let data;
    // try {
    //   data = await axios.post(
    //     "https://dfssuiab-backend-production.up.railway.app/app/registration/",
    //     user,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     },
    //     { withCredentials: true }
    //   );
    // } catch (err) {
    //   console.log("ERROR: ", err);
    // }
    // let token = data.data.data.access_token;
    // console.log(`Bearer ${token}`);
    // console.log("token is :", data.data.data.access_token);
    // localStorage.clear();
    // localStorage.setItem("access_token", token);
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    e.preventDefault();

    const domain = process.env.REACT_APP_DOMAIN;
    const path = "app/login/";

    await axios
      .post(`https://dfssuiab-backend-production.up.railway.app/app/login/`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        const { access_token } = response.data.data;
        console.log(access_token);
        localStorage.setItem("accessToken", access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
      })
      .catch((error) => {
        console.log("ERR: ", error);
      });
    window.location.href = "/all";
  };

  return (
    <div
      className="Auth-form-container container login_cont"
      style={{ backgroundColor: "" }}
    >
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
          <div>
            <Link to="/register">Register</Link>
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
