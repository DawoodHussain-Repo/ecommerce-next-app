"use client";

import useWixClient from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";
import { useState } from "react";

// Check if Wix is configured (client-side check)
const isWixConfigured = () => {
  const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;
  return !!(
    clientId &&
    clientId !== "your_wix_client_id_here" &&
    clientId.length > 10
  );
};

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const wixConfigured = isWixConfigured();

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();
  const { addItem, isLoading } = useCartStore();

  const handleAddToCart = () => {
    if (!wixConfigured) {
      alert(
        "Cart functionality is disabled in demo mode. Please configure your Wix environment variables to enable cart and checkout.",
      );
      return;
    }
    addItem(wixClient, productId, variantId, quantity);
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
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-36 text-sm rounded-3xl ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white"
          title={
            !wixConfigured
              ? "Demo mode - Configure Wix to enable"
              : "Add to cart"
          }
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Add;
