"use client";

import useWixClient from "@/hooks/useWixClient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
    const wixClient = useWixClient();
    const router = useRouter();
    const [user, setUser] = useState<{
        nickname?: string;
        email?: string;
        createdDate?: string;
    } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Using dummy data since Wix is disabled
        const isLoggedIn = wixClient.auth.loggedIn();
        if (isLoggedIn) {
            setUser({
                nickname: "Demo User",
                email: "demo@example.com",
                createdDate: new Date().toISOString(),
            });
            setLoading(false);
        } else {
            router.push("/login");
        }
    }, [wixClient, router]);

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16">
            <h1 className="text-3xl font-bold mb-8">My Profile</h1>

            <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl">
                <div className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-600">Username</label>
                        <p className="text-lg font-medium">
                            {user?.nickname || "N/A"}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <p className="text-lg font-medium">
                            {user?.email || "N/A"}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Member Since</label>
                        <p className="text-lg font-medium">
                            {user?.createdDate
                                ? new Date(user.createdDate).toLocaleDateString()
                                : "N/A"}
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                    <h2 className="text-xl font-semibold mb-4">Account Actions</h2>
                    <div className="space-y-2">
                        <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                            Order History (Demo)
                        </button>
                        <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                            Saved Addresses (Demo)
                        </button>
                        <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                            Payment Methods (Demo)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
