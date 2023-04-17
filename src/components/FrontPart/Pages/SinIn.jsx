import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  loadingStart,
  loadingStop,
} from "../../../../redux/actionCreators/loadingAction";
import { toast } from "react-toastify";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);

  const { loadingStatus } = loading;

  useEffect(() => {
    dispatch(loadingStop());
  }, []);

  const onSubmit = async (formData) => {
    const { email, password } = formData;
    dispatch(loadingStart());
    await fetch(`${import.meta.env.VITE_NODE_SERVER_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          toast("Successfully login");
          dispatch(loadingStop());
        } else {
          toast.error(resData.message);
          dispatch(loadingStop());
        }
      });
  };
  return (
    <div className="w-full  py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-control mt-5">
          {loadingStatus && <button className="btn loading">loading</button>}
          {!loadingStatus && (
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          )}
        </div>
      </form>
      <div className="form-control mt-6">
        <p className="text-center">
          Don't have an account yet?{" "}
          <Link className="link" to="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
