"use client";

import React from 'react'
import { Button } from '@mui/material';
import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className="w-[600px] h-[50px] bg-white border border-orange-400 rounded-lg shadow-sm flex items-center px-4">
            <input 
                type="text" 
                placeholder="Search Products, Brands and More" 
                className="w-full outline-none"
            />
            <Button className="min-w-0 p-0 ml-2">
                <IoSearch size={22} className="text-orange-500" />
            </Button>
        </div>
    )
}

export default Search