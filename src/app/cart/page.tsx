"use client";

import { useCartStore } from "@/hooks/useCartStore";
import useWixClient from "@/hooks/useWixClient";
import { media as wixMedia } from "@wix/sdk";
import Image from "next/image";
import { useEffect } from "react";

const CartPage = () => {
    const wixClient = useWixClient();
    const { cart, isLoading, getCart, removeItem } = useCartStore();

    useEffect(() => {
        getCart(wixClient);
    }, [wixClient, getCart]);

    const handleCheckout = async () => {
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
        <div className="min-h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            {isLoading ? (
                <div className="text-center py-12">Loading...</div>
            ) : !cart || cart.lineItems?.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">Your cart is empty</p>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1">
                        {cart.lineItems?.map((item) => (
                            <div
                                key={item._id}
                                className="flex gap-4 border-b py-4 items-center"
                            >
                                {item.image && (
                                    <Image
                                        src={wixMedia.getScaledToFillImageUrl(
                                            item.image,
                                            120,
                                            160,
                                            {}
                                        )}
                                        alt={item.productName?.original || "Product"}
                                        width={120}
                                        height={160}
                                        className="object-cover rounded-md"
                                    />
                                )}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">
                                        {item.productName?.original}
                                    </h3>
                                    {item.descriptionLines?.map((desc, index) => (
                                        <p key={index} className="text-sm text-gray-600">
                                            {String(desc.name?.original || desc.name || '')}: {desc.plainText?.original}
                                        </p>
                                    ))}
                                    <p className="text-sm text-gray-500 mt-2">
                                        Quantity: {item.quantity}
                                    </p>
                                    <p className="text-lg font-semibold mt-2">
                                        ${item.price?.amount}
                                    </p>
                                    <button
                                        className="text-red-500 text-sm mt-2 underline"
                                        onClick={() => removeItem(wixClient, item._id!)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-100 rounded-lg p-6 sticky top-20">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${cart.lineItems?.reduce((sum, item) => sum + (Number(item.price?.amount) || 0) * (item.quantity || 0), 0).toFixed(2) || 0}</span>
                                </div>
                                <div className="border-t pt-2 mt-2">
                                    <div className="flex justify-between font-semibold text-lg">
                                        <span>Total</span>
                                        <span>${cart.lineItems?.reduce((sum, item) => sum + (Number(item.price?.amount) || 0) * (item.quantity || 0), 0).toFixed(2) || 0}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition"
                                onClick={handleCheckout}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
