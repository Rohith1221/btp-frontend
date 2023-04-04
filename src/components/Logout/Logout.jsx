import { useEffect, useState } from "react";
import axios from "axios";

export const Logout = () => {
  const authToken = localStorage.getItem("accessToken");
  console.log(authToken);
  useEffect(() => {
    axios
      .post("https://dfssuiab-backend-production.up.railway.app/app/logout/", {
        headers: {
          Authorization: `Bearer ${authToken}`, // include the token in the headers
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      localStorage.clear();
      axios.defaults.headers.common["Authorization"] = null;
      window.location.href = "/login";
  }, []);

  // console.log(data)
  // localStorage.clear();
  // localStorage.setItem('token', data.access);
  // localStorage.setItem('refresh_token', data.refresh);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;

  return <div></div>;
};

// (async () => {
//       const authToken = localStorage.getItem("accessToken");
//       try {
//         const { data } = await axios.post(
//           "https://dfssuiab-backend-production.up.railway.app/app/logout/",

//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           },
//           { withCredentials: true }
//         );

//         console.log("logout", data);
//         localStorage.clear();
//         axios.defaults.headers.common["Authorization"] = null;
//         window.location.href = "/login";
//       } catch (e) {
//         console.log("logout not working");
//       }
//     })
