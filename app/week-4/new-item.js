"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    return (
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
    )
}