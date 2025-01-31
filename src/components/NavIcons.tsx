'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Profile from '../../public/user.png';
import NotificationIcon from '../../public/bell.png';
import ShoppingBag from '../../public/shopping-bag.png';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import CartModal from './CartModal';
import useWixClient from '@/hooks/useWixClient';
import Cookies from 'js-cookie';
import { log } from 'console';
const NavIcons = () => {
  const wixClient = useWixClient();
  const router = useRouter();
  const isLoggedIn = wixClient.auth.loggedIn();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
const [loading,isLoading] = useState(false);

  const isLogged = isLoggedIn;

  const handleProfileClick = () => {
    if (!isLogged) {
      router.push('/login');
    } else {
      setProfileOpen(!profileOpen);
    }
  };
const handleLogout = async () => {
  isLoading(true);
  Cookies.remove("refreshToken");
  const { logoutUrl } = await wixClient.auth.logout(window.location.href);
  router.push(logoutUrl);
  setProfileOpen(false);
  isLoading(false);


}
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
            <Link href="/" className="block px-4 py-2 hover:bg-gray-200 rounded-lg" onClick={handleLogout}>
            {loading ? "Loading..." : "Logout"}
            </Link>
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
          <div className="absolute left-[-40] top-10 bg-white shadow-md p-2 rounded-lg z-50">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-200 rounded-lg">
              Notifications
            </Link>
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
        <div
          className="absolute top-[-5px] right-[-5px] h-4 w-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
          2
        </div>
      </div>

      {/* Cart Modal */}
      {cartOpen &&  <CartModal />}
    </div>
  );
};

export default NavIcons;
