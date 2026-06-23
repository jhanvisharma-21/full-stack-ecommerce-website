import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import Nav from "./Nav"; // ✅ IMPORTANT (you missed this)
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <div className="headerWrapper">

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

            {/* Search */}
            <div className="flex-1 mx-6 max-w-[600px]">
              <Search />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">
              
              {/* Login/Register */}
              <div className="flex items-center gap-3">
                <Link href="/login" className="hover:text-orange-500">
                  Login
                </Link>
                <span>|</span>
                <Link href="/register" className="hover:text-orange-500">
                  Register
                </Link>
              </div>

              {/* Wishlist */}
              <Link href="/wishlist" className="relative flex items-center">
                <span className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
                <IoIosHeartEmpty size={24} />
              </Link>

              {/* Cart */}
              <Link href="/cart" className="relative flex items-center">
                <span className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center">
                  3
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