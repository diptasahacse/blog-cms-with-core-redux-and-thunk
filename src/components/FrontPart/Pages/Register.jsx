import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
const Register = () => {
    
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const {email, phone, fullName, password} = formData;
    
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, phone, fullName, password

      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData)
        if(resData.status){
          toast(resData.message)

        }
        else{
          toast.error(resData.message)
        }

      });
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
