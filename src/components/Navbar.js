import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-3xl font-bold text-white tracking-wide">
          <Link to="/">
            🍕 Taste<span className="text-yellow-400">Hub</span>
          </Link>
        </div>

        <div className="hidden lg:flex space-x-8 text-lg font-medium text-white">
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            to="/order"
            className="bg-yellow-500 text-red-800 px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-600 hover:text-red-900 transition duration-300"
          >
            Order Now
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-red-800">
          <Link
            to="/"
            className="block py-3 px-6 text-white hover:bg-red-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-3 px-6 text-white hover:bg-red-700 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-3 px-6 text-white hover:bg-red-700 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/order"
            className="block my-3 mx-6 bg-yellow-500 text-red-900 py-3 px-5 rounded-full text-center shadow-md font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
