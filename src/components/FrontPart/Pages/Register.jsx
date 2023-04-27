import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  loadingStart,
  loadingStop,
} from "../../../../redux/actionCreators/loadingAction";
import baseUrl from "../../../../utils/bageUrl";
const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);

  const { loadingStatus } = loading;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(loadingStop());
  }, []);

  const onSubmit = async (formData) => {
    dispatch(loadingStart());
    const { email, phone, fullName, password } = formData;

    try {
      await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
          fullName,
          password,
        }),
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.success) {
            dispatch(loadingStop());
            toast(resData.message);
          } else {
            dispatch(loadingStop());
            toast.error(resData.message);
          }
        });
    } catch (error) {
      dispatch(loadingStop());
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Full name"
            className="input input-bordered"
            {...register("fullName", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            placeholder="Phone"
            className="input input-bordered"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
        </div>

        <div className="form-control mt-5">
          {loadingStatus && <button className="btn loading">loading</button>}
          {!loadingStatus && (
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          )}
        </div>
      </form>
      <div className="form-control mt-6">
        <p className="text-center">
          Already a user.?{" "}
          <Link className="link" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
