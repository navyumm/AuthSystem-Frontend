import React from "react";
import { Button, Input } from "./index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/authSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = async (data) => {
    const isEmail = data.username.includes("@");
    const loginData = isEmail
      ? { email: data.username, password: data.password }
      : data;

    const response = await dispatch(userLogin(loginData));
    if (response?.payload) {
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-5">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <form onSubmit={handleSubmit(submit)} className="space-y-6">
          {/* Username / Email Field */}
          <div className="space-y-2">
            <Input
              label="Username / Email"
              type="text"
              placeholder="Enter email"
              {...register("username", {
                required: "Username or email is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
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
            Login
          </Button>

          {/* Signup Link */}
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;