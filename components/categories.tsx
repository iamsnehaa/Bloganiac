"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Technology",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
  ];

  return (
    <div className="absolute top-4 left-4 z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md  hover:bg-gray-300 transition"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 shadow-md rounded-md w-40">
          <ul className="py-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-900 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
