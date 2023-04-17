import { useState } from "react";
import { useDispatch } from "react-redux";

const useAuth = () => {
    const [data, setData] = useState({})
    
  fetch(`${import.meta.env.VITE_NODE_SERVER_API}/userData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      token: localStorage.getItem("accessToken"),
    }),
  }).then((res)=> res.json())
  .then(data => setData(data));


  return data;
};

export default useAuth;
