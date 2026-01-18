import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { members } from "@wix/members";
import { currentCart } from "@wix/ecom";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
    let refreshToken;

    try {
        const cookieStore = await cookies();
        refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
    } catch (e) {
        console.error("Error parsing refresh token:", e);
    }

    const wixClient = createClient({
        modules: {
            products,
            collections,
            members,
            currentCart,
        },
        auth: OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
            tokens: {
                refreshToken,
                accessToken: { value: "", expiresAt: 0 },
            },
        }),
    });

    return wixClient;
};