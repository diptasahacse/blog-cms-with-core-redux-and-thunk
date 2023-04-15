import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
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
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-5">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
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
