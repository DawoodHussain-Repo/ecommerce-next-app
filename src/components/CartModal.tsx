"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useCartStore } from '@/hooks/useCartStore';
import useWixClient from '@/hooks/useWixClient';
import { media as wixMedia } from "@wix/sdk";
import { useRouter } from 'next/navigation';

// Check if Wix is configured (client-side check)
const isWixConfigured = () => {
  const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;
  return !!(clientId && clientId !== 'your_wix_client_id_here' && clientId.length > 10);
};

const CartModal = () => {
  const wixClient = useWixClient();
  const { cart, isLoading, getCart, removeItem } = useCartStore();
  const router = useRouter();
  const wixConfigured = isWixConfigured();

  useEffect(() => {
    if (wixConfigured) {
      getCart(wixClient);
    }
  }, [wixClient, getCart, wixConfigured]);

  const handleCheckout = async () => {
    if (!wixConfigured) {
      alert('Cart functionality is disabled in demo mode. Please configure your Wix environment variables.');
      return;
    }
    
    try {
      const checkout = await wixClient.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB" as const,
      });

      if (checkout.checkoutId) {
        // Redirect to Wix checkout page
        window.location.href = `https://www.wix.com/checkout/${checkout.checkoutId}`;
      }
    } catch (err) {
      console.error("Error during checkout:", err);
    }
  };

  return (
    <div className="absolute left-[-280px] shadow-inner top-11 bg-gray-100 rounded-lg flex flex-col z-20 w-[400px]">
      {!wixConfigured ? (
        <div className="p-4">
          <p className="text-lg font-semibold text-amber-600">Cart Disabled (Demo Mode)</p>
          <p className="text-sm text-gray-600 mt-2">Configure Wix environment variables to enable cart functionality.</p>
        </div>
      ) : !cart || cart.lineItems?.length === 0 ? (
        <div className="p-4">
          <p className="text-lg font-semibold text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

          {/* Product List */}
          {isLoading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <>
              {cart.lineItems?.map((item) => (
                <div key={item._id} className="flex gap-4 mb-4">
                  {item.image && (
                    <Image
                      src={wixMedia.getScaledToFillImageUrl(
                        item.image,
                        72,
                        96,
                        {}
                      )}
                      alt={item.productName?.original || "Product"}
                      width={72}
                      height={96}
                      className="object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-sm">
                        {item.productName?.original}
                      </p>
                      <p className="p-1 bg-gray-50 rounded-sm text-sm">
                        ${item.price?.amount}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.availability?.status}
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm">Qty: {item.quantity}</span>
                      <button
                        className="text-blue-600 text-sm underline"
                        onClick={() => removeItem(wixClient, item._id!)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Subtotal Section */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-semibold">
                    ${cart.lineItems?.reduce((sum, item) => sum + (Number(item.price?.amount) || 0) * (item.quantity || 0), 0).toFixed(2) || 0}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex flex-row justify-between gap-2">
                <button
                  className="text-blue-600 underline rounded-full"
                  onClick={() => router.push('/cart')}
                >
                  View Cart
                </button>
                <button
                  className="bg-blue-600 text-white rounded-full p-2 px-3 hover:bg-blue-700 transition"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartModal;
