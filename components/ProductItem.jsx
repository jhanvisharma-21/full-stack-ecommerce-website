"use client";

import React from "react";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";

const ProductItem = ({ products = [] }) => {
  const {
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
} = useWishlist();

const {
  addToCart,
  isInCart,
} = useCart();

  return (
    <>
      {products.map((item) => (
        <div
          key={item.id}
          className="relative bg-white rounded-lg shadow hover:shadow-lg transition"
        >
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              if (isInWishlist(item.id)) {
                removeFromWishlist(item.id);
              } else {
                addToWishlist(item);
              }
            }}
            className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow hover:scale-110 transition"
          >
            {isInWishlist(item.id) ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-gray-500 text-xl" />
            )}
          </button>

          <Link
            href={`/products/${item.id}`}
            className="block p-3"
          >
            {/* Image */}
            <div className="h-44 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full object-contain"
              />
            </div>

            {/* Brand */}
            <p className="text-xs text-gray-500 mt-3">
              {item.brand}
            </p>

            {/* Product Name */}
            <h3 className="font-semibold text-sm mt-1 min-h-[40px]">
              {item.name}
            </h3>

            {/* Rating */}
            <div className="text-yellow-400 text-sm">
              ⭐ {item.rating}
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-500 font-bold">
                ₹{item.price}
              </span>

              <span className="text-gray-400 line-through text-sm">
                ₹{item.oldPrice}
              </span>
            </div>

            {/* Add to Cart */}
          <button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
  }}
  className="mt-4 w-full border border-green-500 text-green-600 py-2 rounded hover:bg-green-500 hover:text-white transition"
>
  {isInCart(item.id) ? "ADDED TO CART" : "ADD TO CART"}
</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductItem;