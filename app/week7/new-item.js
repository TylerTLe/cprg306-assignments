"use client";

import { useState } from "react";
import toast from "react-hot-toast";

function Name({ name, setName }) {
  return (
    <div className="mb-2">
      <input
        placeholder="Item name"
        name="name"
        onChange={(event) => setName(event.target.value)}
        className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        type="text"
        required=""
        value={name}
      />
    </div>
  );
}

function Quantity({ quantity, setQuantity }) {
  return (
    <div>
      <input
        id="quantity"
        name="quantity"
        onChange={(event) => setQuantity(event.target.value)}
        className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        type="number"
        min="1"
        max="99"
        required=""
        value={quantity}
      />
    </div>
  );
}

function Category({ category, setCategory }) {
  return (
    <div>
      <select
        className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        id="category"
        name="category"
        onChange={(event) => setCategory(event.target.value)}
        value={category}
      >
        <option value="" disabled="">
          Category
        </option>
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="meat">Meat</option>
        <option value="bakery">Bakery</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

function NewItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [items, setItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };
    setItems([...items, newItem]);
    console.log(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
    onAddItem(newItem);
    toast.success(`${quantity} ${name} in ${category} added to shopping list!`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
    >
      <Name name={name} setName={setName} />
      <div className="flex justify-between">
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <Category category={category} setCategory={setCategory} />
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
}

export default NewItemForm;
