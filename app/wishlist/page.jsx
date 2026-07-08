"use client";

import { useWishlist } from "../context/WishlistContext";
import ProductItem from "@/components/ProductItem";

const WishlistPage = () => {
  const { wishlist } = useWishlist();
  console.log("Wishlist Page:", wishlist);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-2">
        My Wishlist 
      </h1>

      <p className="text-gray-500 mb-8">
        {wishlist.length} Product(s)
      </p>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            Your Wishlist is Empty 
          </h2>

          <p className="text-gray-500 mt-2">
            Add products to your wishlist.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <ProductItem products={wishlist} />
        </div>
      )}
    </div>
  );
};

export default WishlistPage;