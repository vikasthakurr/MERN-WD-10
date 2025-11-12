import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigate();

  return (
    <nav className="bg-blue-300 shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <Link to="/home" className="text-3xl font-bold text-gray-800">
          HyperMarket
        </Link>
        <div className="hidden md:block">
          <Link to="/home" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
        </div>
      </div>

      <div className="flex-1 max-w-lg mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/cart" className="relative text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.46-1.12.75.75 0 00-.429-1.455c-.182.075-.37.14-.559.193l-13.27-3.438A.75.75 0 005.14 6.63l-1.26-4.725A.75.75 0 003.13 1.5H2.25zM16.5 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.75 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        </Link>
        <>
          <Link
            to="/login"
            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
          >
            Signup
          </Link>
        </>
      </div>
    </nav>
  );
};

export default NavBar;
