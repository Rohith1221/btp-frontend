import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      window.location.href = "/login";
    } else {
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
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi {message}</h3>
    </div>
  );
};
