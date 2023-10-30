"use client";

import { useState } from "react";
import Item from "./item";
import React from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("Name");
  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "Name") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    } else if (sortBy === "Category") {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
    }
    return 0;
  });

  const handleButtonClick = (sortType) => {
    setSortBy(sortType);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <button
        className={`p-1 m-2 w-28 ${
          sortBy === "Name" ? "bg-orange-500" : "bg-orange-700"
        }`}
        onClick={() => handleButtonClick("Name")}
      >
        Name
      </button>
      <button
        className={`p-1 m-2 w-28 ${
          sortBy === "Category" ? "bg-orange-500" : "bg-orange-700"
        }`}
        onClick={() => handleButtonClick("Category")}
      >
        Category
      </button>
      <ul>
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
