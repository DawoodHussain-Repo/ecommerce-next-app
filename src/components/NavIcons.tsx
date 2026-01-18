'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Profile from '../../public/user.png';
import NotificationIcon from '../../public/bell.png';
import ShoppingBag from '../../public/shopping-bag.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CartModal from './CartModal';
import useWixClient from '@/hooks/useWixClient';
import { useCartStore } from '@/hooks/useCartStore';
import Cookies from 'js-cookie';

const NavIcons = () => {
  const wixClient = useWixClient();
  const router = useRouter();
  const isLoggedIn = wixClient.auth.loggedIn();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setProfileOpen(!profileOpen);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setProfileOpen(false);
    setLoading(false);
    router.push(logoutUrl);
  };

  return (
    <div className="flex gap-4 relative">
      {/* Profile Icon */}
      <div className="relative">
        <Image
          src={Profile}
          width={28}
          height={28}
          alt="Profile Icon"
          className="cursor-pointer"
          onClick={handleProfileClick}
        />
        {profileOpen && (
          <div className="absolute left-0 top-10 bg-white shadow-lg p-3 space-y-3 rounded-lg z-50">
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200 rounded-lg">
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg"
            >
              {loading ? "Loading..." : "Logout"}
            </button>
          </div>
        )}
      </div>

      {/* Notification Icon */}
      <div className="relative">
        <Image
          src={NotificationIcon}
          width={28}
          height={28}
          alt="Notification Icon"
          className="cursor-pointer"
          onClick={() => setNotificationOpen(!notificationOpen)}
        />
        {notificationOpen && (
          <div className="absolute left-[-40px] top-10 bg-white shadow-md p-2 rounded-lg z-50">
            <div className="px-4 py-2 text-gray-600">No new notifications</div>
          </div>
        )}
      </div>

      {/* Shopping Bag Icon */}
      <div className="relative">
        <Image
          src={ShoppingBag}
          width={28}
          height={28}
          alt="Shopping Bag Icon"
          className="cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        />
        <div className="absolute top-[-5px] right-[-5px] h-4 w-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
          {counter}
        </div>
      </div>

      {/* Cart Modal */}
      {cartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
