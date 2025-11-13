import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../redux/cartSlice.js";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items to proceed to checkout.");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-8/12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
              Your Shopping Cart
            </h1>
            {cart.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-xl shadow-lg">
                <svg
                  className="mx-auto h-28 w-28 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="text-2xl text-gray-700 mt-6">
                  Your cart is currently empty.
                </p>
                <p className="text-gray-500 mt-2">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link
                  to="/home"
                  className="mt-8 inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Products
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-6">
                      <img
                        className="h-24 w-24 rounded-lg object-cover"
                        src={item.thumbnail}
                        alt={item.title}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-gray-200 rounded-full">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                          className="text-gray-600 hover:text-gray-900 focus:outline-none px-4 py-2"
                        >
                          &minus;
                        </button>
                        <span className="text-center w-12 font-semibold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item))}
                          className="text-gray-600 hover:text-gray-900 focus:outline-none px-4 py-2"
                        >
                          &#43;
                        </button>
                      </div>
                      <p className="text-lg font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-3/12 mt-12 lg:mt-0 lg:ml-8">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-500">Free</span>
                </div>
              </div>
              <div className="border-t border-gray-200 my-6"></div>
              <div className="flex justify-between font-extrabold text-xl text-gray-900">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`w-full mt-8 py-4 px-6 rounded-full text-white font-semibold text-lg transition-all duration-300 ${
                  cart.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105"
                }`}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;