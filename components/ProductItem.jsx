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
          className="relative bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
        >
          {/* Wishlist */}
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
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition z-10"
          >
            {isInWishlist(item.id) ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </button>

          <Link href={`/products/${item.id}`} className="block">
            {/* Product Image */}
            <div className="h-44 flex justify-center items-center">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Brand */}
            <p className="text-gray-500 text-sm mt-3">
              {item.brand}
            </p>

            {/* Product Name */}
            <h2 className="font-semibold mt-1 min-h-[45px]">
              {item.name}
            </h2>

            {/* Rating */}
            <div className="text-yellow-500 mt-2">
              ⭐ {item.rating}
            </div>

            {/* Price */}
            <div className="flex gap-2 items-center mt-2">
              <span className="text-red-500 font-bold">
                ₹{item.price}
              </span>

              <span className="line-through text-gray-400 text-sm">
                ₹{item.oldPrice}
              </span>
            </div>
          </Link>

          {/* Add To Cart */}
          <button
            onClick={() => addToCart(item)}
            className="mt-4 w-full border border-green-500 text-green-600 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
          >
            {isInCart(item.id)
              ? "ADDED TO CART"
              : "ADD TO CART"}
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductItem;