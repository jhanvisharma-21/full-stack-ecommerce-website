"use client";
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import Nav from "./Nav";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import UserMenu from "./UserMenu";

export default function Header() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="headerWrapper sticky top-0 z-50 bg-white">
      <header className="py-3 border-b border-gray-300">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">

          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                width={35}
                height={35}
                alt="logo"
              />
              <span className="font-semibold text-lg">
                Cartopia
              </span>
            </div>
          </Link>

          <Link href="/orders">
            My Orders
          </Link>

          <div className="flex-1 mx-6 max-w-[600px]">
            <Search />
          </div>

          <div className="flex items-center gap-5">

            <UserMenu />

            <Link
              href="/wishlist"
              className="relative flex items-center"
            >
              <span className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">
                {mounted ? wishlist.length : 0}
              </span>

              <IoIosHeartEmpty size={24} />
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center"
            >
              <span className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">
                {mounted ? cart.length : 0}
              </span>

              <IoBagHandleOutline size={24} />
            </Link>

          </div>

        </div>
      </header>

      <Nav />
    </div>
  );
D}