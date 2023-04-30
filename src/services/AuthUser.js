import axios from "axios";
import React, { useState } from "react";
import baseUrl from "../../utils/bageUrl";
import { useLocation, useNavigate } from "react-router-dom";

const AuthUser = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/dashboard";

  const getToken = () => {
    const tokenString = sessionStorage.getItem("accessToken");
    const userToken = JSON.parse(tokenString);

    return userToken;
  };
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const userDetails = JSON.parse(userString);

    return userDetails;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
  const saveToken = (user, token) => {
    sessionStorage.setItem("accessToken", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));

    setToken(token);
    setUser(user);
    navigate(from, { replace: true });
  };
  const http = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    http,
    setToken: saveToken,
    token,
    user,
    getToken,
  };
};

export default AuthUser;
