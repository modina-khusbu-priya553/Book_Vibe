import React from "react";
import { Link } from "react-router";


const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-white">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-200">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 transition duration-300"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10">
          <span className="inline-block animate-bounce text-6xl">
            🚀
          </span>
        </div>
      </div>
    </div>
  );
};

export default Error;