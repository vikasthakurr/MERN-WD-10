import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice.js";

const ProductModal = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const productInCart = useSelector((state) =>
    state.cart.find((item) => item.id === product?.id)
  );
  const quantity = productInCart?.quantity || 0;

  if (!product) return null;

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <IoClose size={28} />
        </button>
        <div className="w-1/2 pr-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-6 border-l border-gray-200 flex flex-col">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="ml-3 text-gray-600 text-lg">
              ({product.rating.toFixed(1)})
            </span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${discountedPrice}
            </span>
            <span className="ml-4 text-2xl text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </span>
            <span className="ml-4 text-lg font-semibold text-red-500">
              {product.discountPercentage.toFixed(0)}% OFF
            </span>
          </div>
          <div className="mt-auto">
            {productInCart ? (
              <div className="w-full flex items-center justify-between">
                <button
                  onClick={() => dispatch(decreaseQuantity(product))}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-lg"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(product))}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-lg"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors duration-300"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
