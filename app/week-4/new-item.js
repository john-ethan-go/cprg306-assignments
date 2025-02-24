"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = { name, quantity, category };
        console.log(item);
    }

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(event.target.value);
    }

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleCategoryChange = (event) => {
        let newCategory = event.target.value;
        newCategory = newCategory.toLowerCase();
        setCategory(newCategory);
    }

    return (
        <form onSubmit={handleSubmit} className="p-2 m-4 bg-white rounded w-36">
            <div className="mb-2">
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="w-full p-1 border border-gray-300 rounded" placeholder="Item Name" />
            </div>

            <div className="flex justify-between">  

                <div className="p-2 m-4 bg-white rounded w-36"> 
                    <div className="flex justify-between">
                        <span className="w-1/2 text-black">{quantity}</span>
                        <div className="flex">
                            
                            <button onClick={increment} className="w-8  bg-blue-500 hover:bg-blue-700 active:bg-red-500  rounded">
                            +
                            </button>

                            <button onClick={decrement} className="w-8  bg-blue-500 hover:bg-blue-700 active:bg-red-500  rounded ml-1">
                            -
                            </button>

                        </div>
                    </div>
                </div>

                <select value={category} onChange={handleCategoryChange} className="w-36 p-1 border border-gray-300 rounded">
                    <option value disabled>Category</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>

            </div>

            <button>
                
            </button>
        </form>
    )
}