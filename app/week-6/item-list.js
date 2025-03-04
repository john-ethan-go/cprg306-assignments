"use client";

import { useState } from "react";
import Item from "./item";
import ItemData from "./items.json";


export default function ItemList({ }) {
  const [sortBy, setSortBy] = useState("name");
  let items = [...ItemData];
  
  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    // } else if (sortBy === "quantity") {
    //   return a.quantity - b.quantity;
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  }
  );

  


  return (
    <div>
      <div className="m-4">
        {/* <h2 className="text-2xl font-bold">Shopping List</h2> */}

        <div>
          <label className="text-white">Sort By:</label>
          <button className="m-2 p-2 bg-slate-700 text-white" onClick={() => setSortBy("name")}>Name</button>
          {/* <button className="m-2 p-2 bg-slate-700 text-white" onClick={() => setSortBy("quantity")}>Quantity</button> */}
          <button className="m-2 p-2 bg-slate-700 text-white" onClick={() => setSortBy("category")}>Category</button>
        </div>

      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="m-2 p-2 bg-slate-700">
            <h2 className="font-bold text-lg text-sky-500">{item.name}</h2>
            <div className="ml-1">Buy {item.quantity} in {item.category}</div>
          </li>
        ))}
      </ul>
    </div>


  );
}