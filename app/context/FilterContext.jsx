"use client";

import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [price, setPrice] = useState([0, 20000]);
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <FilterContext.Provider
    value={{
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  price,
  setPrice,
  selectedRating,
  setSelectedRating,
}}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}