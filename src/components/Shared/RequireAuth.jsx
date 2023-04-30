import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthUser from "../../services/AuthUser";

const RequireAuth = ({ children }) => {
  const { getToken } = AuthUser();

  return getToken() ? children : <Navigate to="/sign-in" replace={true} />;
};

export default RequireAuth;
