"use client";

import { create } from "zustand";
import { currentCart } from "@wix/ecom";
import { WixClient } from "@/context/wixContext";

// Check if Wix is configured (client-side check)
const isWixConfigured = () => {
    const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;
    return !!(clientId && clientId !== 'your_wix_client_id_here' && clientId.length > 10);
};

type CartState = {
    cart: currentCart.Cart | null;
    isLoading: boolean;
    counter: number;
    getCart: (wixClient: WixClient) => void;
    addItem: (
        wixClient: WixClient,
        productId: string,
        variantId: string,
        quantity: number
    ) => void;
    removeItem: (wixClient: WixClient, itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
    cart: null,
    isLoading: true,
    counter: 0,
    getCart: async (wixClient) => {
        // If Wix is not configured, skip cart operations
        if (!isWixConfigured()) {
            set({ cart: null, isLoading: false, counter: 0 });
            return;
        }
        
        try {
            const cart = await wixClient.currentCart.getCurrentCart();
            set({
                cart: cart || null,
                isLoading: false,
                counter: cart?.lineItems?.length || 0,
            });
        } catch (err) {
            console.error("Error fetching cart:", err);
            set({ cart: null, isLoading: false, counter: 0 });
        }
    },
    addItem: async (wixClient, productId, variantId, quantity) => {
        // If Wix is not configured, skip cart operations
        if (!isWixConfigured()) {
            console.warn("Cart functionality is disabled. Please configure Wix environment variables.");
            set({ isLoading: false });
            return;
        }
        
        set({ isLoading: true });
        try {
            const response = await wixClient.currentCart.addToCurrentCart({
                lineItems: [
                    {
                        catalogReference: {
                            appId: process.env.NEXT_PUBLIC_WIX_APP_ID || "",
                            catalogItemId: productId,
                            ...(variantId && { options: { variantId } }),
                        },
                        quantity: quantity,
                    },
                ],
            });

            set({
                cart: response.cart,
                counter: response.cart?.lineItems?.length || 0,
                isLoading: false,
            });
        } catch (err) {
            console.error("Error adding item to cart:", err);
            set({ isLoading: false });
        }
    },
    removeItem: async (wixClient, itemId) => {
        // If Wix is not configured, skip cart operations
        if (!isWixConfigured()) {
            console.warn("Cart functionality is disabled. Please configure Wix environment variables.");
            set({ isLoading: false });
            return;
        }
        
        set({ isLoading: true });
        try {
            const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
                [itemId]
            );

            set({
                cart: response.cart,
                counter: response.cart?.lineItems?.length || 0,
                isLoading: false,
            });
        } catch (err) {
            console.error("Error removing item from cart:", err);
            set({ isLoading: false });
        }
    },
}));
