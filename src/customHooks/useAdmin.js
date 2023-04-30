import { useEffect, useState } from "react";
import baseUrl from "../../utils/bageUrl";
import { getToken } from "../services/authServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  adminLoadingStart,
  adminLoadingStop,
} from "../../redux/actionCreators/loadingAction";

const useAdmin = () => {
  const dispatch = useDispatch();
  dispatch(adminLoadingStart());

  const token = getToken();
  try {
    fetch(`${baseUrl}/admin`, {
      method: "GET",
      "Content-type": "application/json",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(adminLoadingStop());
        } else {
          dispatch(adminLoadingStop());
        }
      });
  } catch (error) {
    dispatch(adminLoadingStop());
    toast.error(error.message);
  
  }

  return true;
};

export default useAdmin;
