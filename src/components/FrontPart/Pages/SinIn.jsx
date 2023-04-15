import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    // <!-- component -->
    <div className="w-full py-5">
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
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
          />
          <label className="label">
            <Link
              to="/forget-password"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-5">
          <button type="submit" className="btn btn-primary">
            Login
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
