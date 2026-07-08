"use client";

import ProductItem from "@/components/ProductItem";
import products from "@/data/products";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "next/navigation";
import { useFilter } from "../context/FilterContext";

const Productpage = () => {
  const {
    selectedCategory,
    searchTerm,
    setSearchTerm,
    price,
    selectedRating,
  } = useFilter();

  const searchParams = useSearchParams();

  const urlCategory = searchParams.get("category") || "";
  const urlSearch = searchParams.get("search") || "";

  const filteredProducts = products.filter((item) => {
    // Category Filter
    const activeCategory = urlCategory || selectedCategory;

    const categoryMatch =
      activeCategory === "" ||
      item.category === activeCategory;

    // Search Filter
    const search = (urlSearch || searchTerm)
      .trim()
      .toLowerCase();

    const searchMatch =
      item.name.toLowerCase().includes(search) ||
      item.brand.toLowerCase().includes(search);

    // Price Filter
    const priceMatch =
      item.price >= price[0] &&
      item.price <= price[1];

    // Rating Filter
    const ratingMatch =
      selectedRating === 0 ||
      item.rating >= selectedRating;

    return (
      categoryMatch &&
      searchMatch &&
      priceMatch &&
      ratingMatch
    );
  

    return (
      categoryMatch &&
      searchMatch &&
      priceMatch &&
      ratingMatch
    );
  });

  return (
    <div className="bg-[#f5f5f5] p-5 rounded-lg min-h-screen">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-3xl font-bold">
            All Products
          </h2>

          <p className="text-gray-500">
            There are {filteredProducts.length} Products
          </p>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg px-4 py-2 w-72"
        />

      </div>

      {/* Product Grid */}

{filteredProducts.length === 0 ? (
  <div className="bg-white rounded-xl shadow p-16 text-center mt-10">
    <h2 className="text-3xl font-bold text-gray-700">
      No Products Found 
    </h2>

    <p className="text-gray-500 mt-3">
      Try changing the category, search term or filters.
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    <ProductItem products={filteredProducts} />
  </div>
)}

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <Stack spacing={2}>
          <Pagination
            count={5}
            showFirstButton
            showLastButton
          />
        </Stack>
      </div>

    </div>
  );
};

export default Productpage;