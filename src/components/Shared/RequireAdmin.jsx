import { Navigate } from "react-router-dom";
import useAdmin from "../../customHooks/useAdmin";
import { removeToken } from "../../services/authServices";
import { useSelector } from "react-redux";

const RequireAdmin = ({ children }) => {
  const authAdmin =  useAdmin();

console.log(authAdmin)

  return authAdmin ? children : <Navigate to="/sign-in" replace={true} />;
};

export default RequireAdmin;
