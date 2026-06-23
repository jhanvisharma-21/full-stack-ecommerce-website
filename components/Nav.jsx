import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { FaTshirt } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdOutlineChair } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaUser, FaBox, FaCog, FaSignOutAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="bg-gray-100 py-3 border-t border-gray-200 shadow-sm">
      
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="flex items-center justify-between gap-10">

          <Link href="/" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
            <IoHomeOutline size={18} />
            Home
          </Link>

          <Link href="/" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
            <FaTshirt size={18} />
            Fashion
          </Link>

          <Link href="/" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
            <GiLipstick size={18} />
            Beauty
          </Link>

          <Link href="/" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
            <MdOutlineElectricalServices size={18} />
            Appliances
          </Link>

          <Link href="/" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
            <MdOutlineChair size={18} />
            Furniture
          </Link>

          <Link href="/" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition">
            <FaShoppingBasket size={18} />
            Grocery
          </Link>
          <div className="relative group">
  <span className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
    <BsThreeDots size={18} />
    More
  </span>

  <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md py-2 w-44 border border-gray-200 opacity-0 invisible group-hover:opacity-100 
  group-hover:visible transition-all duration-200">

    <Link href="/" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
  <FaUser size={14} />
  My Profile
</Link>
    <Link href="/" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaBox size={14}/>
      Orders
    </Link>

    <Link href="/" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaCog size={14}/>
      Settings
    </Link>

    <Link href="/" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    < FaSignOutAlt size={14}/>
      Help & Support
    </Link>

    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-red-500">
      Logout
    </Link>

  </div>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;