import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthUser from "../../services/AuthUser";
import useAuth from "../../customHooks/useAuth";

const RequireAuth = ({ children }) => {
  const { getToken, user } = AuthUser();
  const { auth, error, loading } = useAuth(user?.email);

  if (loading) {
    return <p>loading...</p>;
  }
  if (Object.keys(auth).length) {
    if (auth.data.success) {
      return children;
    }
  }

  return <Navigate to="/sign-in" replace={true} />;
};

export default RequireAuth;
