import React from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
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

        <div className="form-control mt-5">
          <button type="submit" className="btn btn-danger">
            Send Reset Link
          </button>
        </div>
      </form>
      <div className="form-control mt-6">
        <p className="text-center">
          <Link className="link" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PasswordReset;
