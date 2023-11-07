"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItemForm from "./new-item";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Home() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const {user } = useUserAuth();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.split(" ")[0].replace(",","");
    setSelectedItemName(cleanedItemName);
  };

  return (
    <div>
      {!user ? (
              <div className="items-center justify-center flex mt-40 text-4xl font-bold">
              You cannot access this page, Please log in to continue
            </div>
      ) : (
        <main className="bg-slate-950 p-2 m-2">
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItemForm onAddItem={handleAddItem} />
          <ItemList
            className="mt-8"
            items={items}
            onItemSelect={handleItemSelect}
            />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
      )}
            </div>
  );
}
