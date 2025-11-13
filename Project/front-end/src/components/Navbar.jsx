import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

import { useSearch } from "../context/SearchContext.jsx";

const NavBar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { user, logout } = useAuth(); // Use the context
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const { search, setSearch } = useSearch();

  const handleLogout = () => {
    logout();
    navigate("/login"); // redirect to login page after logout
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center shadow-md">
      <h2 className="text-2xl font-bold">Weekdays-10</h2>

      {/* search functionality */}
      <div className="flex-1 max-w-md mx-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 rounded-full bg-blue-400 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/home" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-gray-200">
            Profile
          </Link>
        </li>
        <li className="relative">
          <Link to="/cart" className="hover:text-gray-200">
            Cart
          </Link>
          {quantity > 0 && (
            <span className="absolute -top-2 -right-3 bg-blue-700 text-white rounded-full px-2 py-1 text-xs">
              {quantity}
            </span>
          )}
        </li>
        {user && user.username ? (
          <>
            <li className="font-semibold">Welcome, {user.username}</li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-gray-200">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
