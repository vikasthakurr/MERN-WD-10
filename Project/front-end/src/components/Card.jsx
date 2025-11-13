import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice.js";

const Card = ({ productObj, onQuickView }) => {
  const dispatch = useDispatch();
  const productInCart = useSelector((state) =>
    state.cart.find((item) => item.id === productObj.id)
  );

  const quantity = productInCart?.quantity || 0;

  const discountedPrice = (
    productObj.price -
    (productObj.price * productObj.discountPercentage) / 100
  ).toFixed(2);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 group transform transition-transform duration-300 hover:-translate-y-2 relative">
      <figure className="relative w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={productObj.thumbnail}
          alt={productObj.title}
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {productObj.discountPercentage.toFixed(0)}% OFF
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onQuickView(productObj)}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-bold"
          >
            Quick View
          </button>
        </div>
      </figure>
      <div className="p-4 flex flex-col grow">
        <h2
          className="text-lg font-semibold text-gray-800 truncate"
          title={productObj.title}
        >
          {productObj.title}
        </h2>
        <div className="flex items-center mt-2">
          <div className="flex">{renderStars(productObj.rating)}</div>
          <span className="ml-2 text-sm text-gray-600">
            ({productObj.rating.toFixed(1)})
          </span>
        </div>
        <div className="mt-2 flex items-baseline">
          <p className="text-xl font-bold text-gray-900">${discountedPrice}</p>
          <p className="ml-2 text-sm text-gray-500 line-through">
            ${productObj.price.toFixed(2)}
          </p>
        </div>
        <div className="mt-4 grow flex items-end">
          {productInCart ? (
            <div className="w-full flex items-center justify-between">
              <button
                onClick={() => dispatch(decreaseQuantity(productObj))}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(productObj))}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => dispatch(addToCart(productObj))}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-colors duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
