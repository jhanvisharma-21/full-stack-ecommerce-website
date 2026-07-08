"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import Nav from "./Nav";
import { useWishlist } from "@/app/context/WishlistContext";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from "@/app/context/CartContext";
import UserMenu from "./UserMenu";

export default function Header() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  // Debugging logs fixed to display correct data safely
  console.log("Wishlist Data:", wishlist);
  console.log("Cart Data:", cart);

  return (
    <>
      <div className="headerWrapper sticky top-0 z-50 bg-white">
        {/* HEADER */}
        <header className="py-3 border-b border-gray-300">
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src="/logo.jpg" width={35} height={35} alt="logo" />
                <span className="font-semibold text-lg">Cartopia</span>
              </div>
            </Link>

            {/* Orders Link */}
            <Link href="/orders" className="hover:text-orange-500 transition-colors">
              My Orders
            </Link>

            {/* Search */}
            <div className="flex-1 mx-6 max-w-[600px]">
              <Search />
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-5">
              {/* Login/Register Menu */}
              <UserMenu />

              {/* Wishlist Link */}
              <Link href="/wishlist" className="relative flex items-center">
                <span className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center">
                  {wishlist?.length || 0}
                </span>
                <IoIosHeartEmpty size={24} />
              </Link>

              {/* Cart Link */}
              <Link href="/cart" className="relative flex items-center">
                <span className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center">
                  {cart?.length || 0}
                </span>
                <IoBagHandleOutline size={24} />
              </Link>
            </div>

          </div>
        </header>

        {/* NAVBAR */}
        <Nav />
      </div>
    </>
  );
}
