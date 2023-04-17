import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";

const RequireAuth =  ({ children }) => {
  let location = useLocation();

  const data = useAuth()
  console.log(data)

  return children;
};

export default RequireAuth;
