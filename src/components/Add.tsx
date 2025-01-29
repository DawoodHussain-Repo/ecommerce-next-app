"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  const stockNumber = 10; // Static stock number for demonstration
  const productId = "dummy-product-id"; // Static product ID
  const variantId = "dummy-variant-id"; // Static variant ID
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const addItem = (productId: string, variantId: string, quantity: number) => {
    setIsLoading(true);
    console.log(`Adding to cart: ${productId}, ${variantId}, Quantity: ${quantity}`);
    setTimeout(() => {
      setIsLoading(false);
      alert("Item added to cart!");
    }, 1000); // Simulates a delay for a backend operation
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
              disabled={quantity === stockNumber}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span> left!
              <br /> 
            </div>
          )}
        </div>
        <button
          onClick={() => addItem(productId, variantId, quantity)}
          disabled={isLoading}
          className="w-36 text-sm rounded-3xl  ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Add;
