import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList = () => {
  return (
    <div className="flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="relative w-full sm:w-[45%] lg:w-[22%]">
        {/* Image Container */}
        <div className="relative w-full h-80">
          <Image
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
            src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
          />
          <Image
            className="absolute object-cover rounded-md z-0"
            src="https://images.pexels.com/photos/30373532/pexels-photo-30373532/free-photo-of-cozy-winter-coffee-moment-over-snowy-stockholm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product-hover"
            fill
            sizes="25vw"
          />
        </div>
        {/* Text and Button */}
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="mt-2 rounded-2xl w-max ring-1 ring-red-400 text-red-400 px-4 py-1 hover:bg-red-400 hover:text-white">
            Add to Cart
          </button>
        </div>
      </Link>
      <Link href="/test" className="relative w-full sm:w-[45%] lg:w-[22%]">
        {/* Image Container */}
        <div className="relative w-full h-80">
          <Image
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
            src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
          />
          <Image
            className="absolute object-cover rounded-md z-0"
            src="https://images.pexels.com/photos/30373532/pexels-photo-30373532/free-photo-of-cozy-winter-coffee-moment-over-snowy-stockholm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product-hover"
            fill
            sizes="25vw"
          />
        </div>
        {/* Text and Button */}
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="mt-2 rounded-2xl w-max ring-1 ring-red-400 text-red-400 px-4 py-1 hover:bg-red-400 hover:text-white">
            Add to Cart
          </button>
        </div>
      </Link>
      <Link href="/test" className="relative w-full sm:w-[45%] lg:w-[22%]">
        {/* Image Container */}
        <div className="relative w-full h-80">
          <Image
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
            src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
          />
          <Image
            className="absolute object-cover rounded-md z-0"
            src="https://images.pexels.com/photos/30373532/pexels-photo-30373532/free-photo-of-cozy-winter-coffee-moment-over-snowy-stockholm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product-hover"
            fill
            sizes="25vw"
          />
        </div>
        {/* Text and Button */}
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="mt-2 rounded-2xl w-max ring-1 ring-red-400 text-red-400 px-4 py-1 hover:bg-red-400 hover:text-white">
            Add to Cart
          </button>
        </div>
      </Link>
      <Link href="/test" className="relative w-full sm:w-[45%] lg:w-[22%]">
        {/* Image Container */}
        <div className="relative w-full h-80">
          <Image
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
            src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
          />
          <Image
            className="absolute object-cover rounded-md z-0"
            src="https://images.pexels.com/photos/30373532/pexels-photo-30373532/free-photo-of-cozy-winter-coffee-moment-over-snowy-stockholm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product-hover"
            fill
            sizes="25vw"
          />
        </div>
        {/* Text and Button */}
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="mt-2 rounded-2xl w-max ring-1 ring-red-400 text-red-400 px-4 py-1 hover:bg-red-400 hover:text-white">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
