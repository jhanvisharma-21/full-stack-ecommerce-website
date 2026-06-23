"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(search)}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <div className="w-[600px] h-[50px] bg-white border border-orange-400 rounded-lg shadow-sm flex items-center px-4">
      <input
        type="text"
        placeholder="Search Products, Brands and More"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full outline-none"
      />

      <Button onClick={handleSearch} className="min-w-0 p-0 ml-2">
        <IoSearch size={22} className="text-orange-500" />
      </Button>
    </div>
  );
};

export default Search;
