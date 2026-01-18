import Image from "next/image";
import Link from "next/link";
import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import { isWixConfigured, dummyCategories } from "@/lib/wixConfig";

const CategoriesList = async () => {
  // Check if Wix is configured, if not return dummy categories
  if (!isWixConfigured()) {
    return (
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8 whitespace-nowrap w-max">
          {dummyCategories.map((category) => (
            <Link
              key={category._id}
              href={`/list?cat=${category.slug}`}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]"
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  className="absolute object-cover rounded-md z-10 transition-opacity ease-out duration-700"
                  src={
                    category.media?.mainMedia?.image?.url ||
                    "https://via.placeholder.com/600"
                  }
                  alt={category.name}
                  fill
                  sizes="25vw"
                />
              </div>
              <h1 className="mt-8 font-light text-clip tracking-wide">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  try {
    const wixClient = await wixClientServer();
    const cat = await wixClient.collections.queryCollections().find();

    return (
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8 whitespace-nowrap w-max">
          {cat.items.map((category) => (
            <Link
              key={category._id}
              href={`/list?cat=${category.slug}`}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]"
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  className="absolute object-cover rounded-md z-10 transition-opacity ease-out duration-700"
                  src={
                    category.media?.mainMedia?.image?.url ||
                    "https://via.placeholder.com/600"
                  }
                  alt="product"
                  fill
                  sizes="25vw"
                />
              </div>
              <h1 className="mt-8 font-light text-clip tracking-wide">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    // Fallback to dummy categories on error
    console.error(
      "Wix connection failed for categories, displaying dummy data:",
      error,
    );
    return (
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8 whitespace-nowrap w-max">
          {dummyCategories.map((category) => (
            <Link
              key={category._id}
              href={`/list?cat=${category.slug}`}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]"
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  className="absolute object-cover rounded-md z-10 transition-opacity ease-out duration-700"
                  src={
                    category.media?.mainMedia?.image?.url ||
                    "https://via.placeholder.com/600"
                  }
                  alt={category.name}
                  fill
                  sizes="25vw"
                />
              </div>
              <h1 className="mt-8 font-light text-clip tracking-wide">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default CategoriesList;
