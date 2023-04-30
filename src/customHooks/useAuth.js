import { useEffect, useState } from "react";
import AuthUser from "../services/AuthUser";

const useAuth = (email) => {
  const { http, getToken } = AuthUser();
  const [auth, setAuth] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    try {
      http.get("/auth").then((res) => {
        setAuth(res);
        setLoading(false);
      });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [email]);

  return {
    auth,
    error,
    loading,
  };
};

export default useAuth;
