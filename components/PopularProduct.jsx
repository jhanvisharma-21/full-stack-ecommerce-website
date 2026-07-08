import React from "react";
import products from "@/data/products";

const PopularProduct = () => {
  console.log(products);
  return (
    <section className="py-6 bg-gray-100">
      <div className="container">

        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Popular Products</h3>
          <p className="text-sm text-gray-500">
            Do not miss the current offers
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 rounded-lg shadow hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={item.image}
                className="w-full h-40 object-contain"
              />

              {/* Brand */}
              <p className="text-xs text-gray-400 mt-2">
                {item.brand}
              </p>

              {/* Name */}
              <h4 className="text-sm font-medium">
                {item.name}
              </h4>

              {/* Rating */}
              <div className="text-yellow-400 text-xs">
                ★★★★☆
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-red-500 font-semibold">
                  ₹{item.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ₹{item.oldPrice}
                </span>
              </div>

              {/* Button */}
              <button className="mt-3 w-full border border-green-500 text-green-600 py-1 rounded hover:bg-green-500 hover:text-white transition">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularProduct;