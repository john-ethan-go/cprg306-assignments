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
        <div> 
            <p>{quantity}</p>
            <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 active:bg-red-500 w-38 round">
                +
                </button>

            <button onClick={decrement} className="bg-blue-500 hover:bg-blue-700 active:bg-red-500 w-38 round">
                -
                </button>
        </div>
    )
}