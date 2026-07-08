"use client";

import React from "react";
import { useFilter } from "../context/FilterContext";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const categories = [
  "Fruits and Vegetables",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Bread and Bakery",
  "Healthcare",
  "Skincare",
  "Cosmetics",
  "Dairy Products",
  "Beverages",
  "Snacks",
  "Frozen Foods",
  "Baby Care",
  "Pet Supplies",
];

const ratings = [5, 4, 3, 2, 1];

const SideBar = () => {
const {
  selectedCategory,
  setSelectedCategory,
  price,
  setPrice,
  selectedRating,
  setSelectedRating,
} = useFilter();
  return (
    <aside className="sticky top-[120px] bg-white rounded-xl p-4 shadow-md">

      {/* CATEGORY */}
      <Accordion
        defaultExpanded
        elevation={0}
        sx={{ boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f97316" }} />}
        >
          <h3 className="text-[16px] font-semibold text-gray-700">
            Shop by Category
          </h3>
        </AccordionSummary>

        <AccordionDetails>
          <FormGroup className="max-h-[250px] overflow-y-auto pr-2">

            {categories.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    size="small"
                    checked={selectedCategory === item}
                    onChange={() =>
                      setSelectedCategory(
                        selectedCategory === item ? "" : item
                      )
                    }
                    sx={{
                      color: "#d1d5db",
                      "&.Mui-checked": {
                        color: "#f97316",
                      },
                    }}
                  />
                }
                label={item}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "14px",
                  },
                }}
              />
            ))}

          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <div className="border-t my-3"></div>

      {/* PRICE */}
      <Accordion
        defaultExpanded
        elevation={0}
        sx={{ boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f97316" }} />}
        >
          <h3 className="text-[15px] font-semibold text-gray-800">
            Filter by Price
          </h3>
        </AccordionSummary>

        <AccordionDetails>

          <Slider
            value={price}
            onChange={(e, val) => setPrice(val)}
            min={0}
            max={20000}
            sx={{ color: "#f97316" }}
          />

          <div className="flex justify-between mt-2 text-sm font-medium text-gray-700">
            <span>₹{price[0]}</span>
            <span>₹{price[1]}</span>
          </div>

        </AccordionDetails>
      </Accordion>

      <div className="border-t my-3"></div>

      {/* RATING */}
      <Accordion
        defaultExpanded
        elevation={0}
        sx={{ boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f97316" }} />}
        >
          <h3 className="text-[15px] font-semibold text-gray-800">
            Filter by Rating
          </h3>
        </AccordionSummary>

        <AccordionDetails>
          <FormGroup>

            {ratings.map((rating) => (
              <FormControlLabel
                key={rating}
                control={
                  <Checkbox
  size="small"
  checked={selectedRating === rating}
  onChange={() =>
    setSelectedRating(
      selectedRating === rating ? 0 : rating
    )
  }
  sx={{
    color: "#d1d5db",
    "&.Mui-checked": {
      color: "#f97316",
    },
  }}
/>
                }
                label={
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) =>
                      star <= rating ? (
                        <StarIcon
                          key={star}
                          sx={{
                            color: "#facc15",
                            fontSize: 18,
                          }}
                        />
                      ) : (
                        <StarBorderIcon
                          key={star}
                          sx={{
                            color: "#d1d5db",
                            fontSize: 18,
                          }}
                        />
                      )
                    )}
                  </div>
                }
              />
            ))}

          </FormGroup>
        </AccordionDetails>
      </Accordion>

    </aside>
  );
};

export default SideBar;