import React from "react";

export default function CategoryButton({ categories, onSelect }) {
  return (
    <div className="flex justify-between gap-6 h-18 overflow-x-auto">
      {categories.map((cat) => (
        <button
          className="category-button-shadow cursor-pointer bg-black/75 border border-[#333] flex justify-center items-center lg:w-full responsive-button h-full rounded-md font-bold"
          key={cat}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
