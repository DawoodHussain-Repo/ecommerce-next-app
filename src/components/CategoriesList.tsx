import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoriesList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      {/* Outer div with flex and dynamic width */}
      <div className="flex gap-4 md:gap-8 whitespace-nowrap w-max">
        {/* Each Category Link */}
        <Link href="/list?cat=test" className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
              src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">CategoryName</h1>
        </Link>
        {/* Duplicate for additional categories */}
        <Link href="/list?cat=test" className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
              src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">CategoryName</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
              src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">CategoryName</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
              src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">CategoryName</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
              src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">CategoryName</h1>
        </Link>
           <Link href="/list?cat=test" className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
              src="https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">CategoryName</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesList;
