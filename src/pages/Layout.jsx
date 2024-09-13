import React from "react";
import { Link } from "react-router-dom";

function LayoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-5">
      {/* WELCOME Message */}
      <h1 className="text-4xl font-bold mb-10">WELCOME</h1>

      {/* Button Container */}
      <div className="flex space-x-4">
        {/* Home Button */}
        <Link to="/home">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Home
          </button>
        </Link>

        {/* Login Button */}
        <Link to="/login">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Login
          </button>
        </Link>

        {/* Signup Button */}
        <Link to="/signup">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LayoutPage;