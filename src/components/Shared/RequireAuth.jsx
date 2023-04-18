import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";

const RequireAuth = ({ children }) => {
  let location = useLocation();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_NODE_SERVER_API}/userData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("accessToken"),
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
      });
  }, []);

  return children;
};

export default RequireAuth;
