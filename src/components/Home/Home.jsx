import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        let data;
        try {
          data = await axios.get(
            "https://dfssuiab-backend-production.up.railway.app/app/key-generation/",
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
            (req, res) => {
              console.log(req.headers.authorization); // log the Authorization header
            }
          );
          console.log(data);

          setMessage(data.message);
        } catch (e) {
          console.log("not auth");
        }
      })();
    }
  }, []);

  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi {message}</h3>
    </div>
  );
};
