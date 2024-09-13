import React from "react";
import { Button, Input } from "./index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createAccount, userLogin } from "../redux/authSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = async (data) => {
    const response = await dispatch(createAccount(data));
    if (response?.payload?.success) {
      const username = data?.username;
      const password = data?.password;
      const loginResult = await dispatch(userLogin({ username, password }));

      if (loginResult?.type === "login/fulfilled") {
        navigate("/home");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-5">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <form onSubmit={handleSubmit(submit)} className="space-y-6">
          {/* Username Field */}
          <div className="space-y-2">
            <Input
              label="Username"
              type="text"
              placeholder="Enter username"
              {...register("username", {
                required: "Username is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Input
              label="Email"
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Fullname Field */}
          <div className="space-y-2">
            <Input
              label="Fullname"
              type="text"
              placeholder="Enter fullname"
              {...register("fullName", {
                required: "Fullname is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </Button>

          {/* Login Link */}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;