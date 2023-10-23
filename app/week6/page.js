"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItemForm from "./new-item";
import itemsData from "./item.json";

export default function Home() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main className="bg-slate-950">
            <div>
                <h2 className="text-3xl font-bold m-2">Shopping List</h2>
                <NewItemForm onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}

