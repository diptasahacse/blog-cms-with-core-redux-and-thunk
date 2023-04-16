import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
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
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
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
