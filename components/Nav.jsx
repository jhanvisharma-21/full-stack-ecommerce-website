"use client";

import React from "react";
import Link from "next/link";
import { useFilter } from "@/app/context/FilterContext";
import { IoHomeOutline } from "react-icons/io5";
import { FaTshirt } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdOutlineChair } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";

const Nav = () => {
  const { setSelectedCategory } = useFilter();

  return (
    <nav className="bg-gray-100 py-3 border-t border-gray-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between gap-10">

          <Link
            href="/"
            onClick={() => setSelectedCategory("")}
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <IoHomeOutline size={18} />
            Home
          </Link>

          <Link
            href="/products?category=Fashion"
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <FaTshirt size={18} />
            Fashion
          </Link>

          <Link
            href="/products?category=Cosmetics"
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <GiLipstick size={18} />
            Beauty
          </Link>

          <Link
            href="/products?category=Electronics"
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <MdOutlineElectricalServices size={18} />
            Appliances
          </Link>

          <Link
            href="/products?category=Home%20%26%20Kitchen"
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <MdOutlineChair size={18} />
            Furniture
          </Link>

          <Link
            href="/products?category=Fruits%20and%20Vegetables"
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <FaShoppingBasket size={18} />
            Grocery
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Nav;