import React from "react";
import { IoMdWarning } from "react-icons/io";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <IoMdWarning className="text-4xl text-red-600 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">Oops! Something Went Wrong</h2>
        <p className="text-lg text-gray-600 mt-2">
          This page does not exist.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
