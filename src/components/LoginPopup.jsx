import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const LoginPopup = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="bg-white border-2 border-gray-300 shadow-lg p-8 text-gray-800 rounded-lg w-80">

        <p className="text-2xl font-semibold mb-6">
          Login or Signup to Continue
        </p>

        {/* Login Button */}
        <Link to="/login">
          <Button
            className="bg-gradient-to-r from-blue-400 to-blue-600 w-full py-3 px-5 font-semibold text-white text-lg rounded-lg mb-5 shadow-md transition-transform transform hover:scale-105"
          >
            Login
          </Button>
        </Link>

        {/* Go Back Button */}
        <Link to="/">
          <Button
            className="bg-gradient-to-r from-gray-400 to-gray-600 w-full py-3 px-5 font-semibold text-white text-lg rounded-lg hover:bg-gray-700 shadow-md transition-transform transform hover:scale-105"
          >
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPopup;