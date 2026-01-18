import Slider from "@/components/Slider";
import React, { Suspense } from "react";
import ProductList from "@/components/ProductList";
import CategoriesList from "@/components/CategoriesList";
import { isWixConfigured, dummyProducts } from "@/lib/wixConfig";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const wixConfigured = isWixConfigured();
  const featuredCategoryId =
    process.env.FEATURED_PRODUCT_CATEGORY_ID ||
    "00000000-000000-000000-000000000001";
  const newCategoryId =
    process.env.NEW_PRODUCT_CATEGORY_ID ||
    "00000000-000000-000000-000000000001";

  return (
    <div>
      <Slider />

      {/* Featured Products */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">
          Featured Products
          {!wixConfigured && (
            <span className="text-sm text-amber-600 ml-2">(Demo Data)</span>
          )}
        </h1>
        <Suspense
          fallback={
            <div className="mt-12 text-gray-500">Loading products...</div>
          }
        >
          <ProductList categoryid={featuredCategoryId} limit={4} />
        </Suspense>
      </div>

      {/* Categories */}
      <div className="mt-24">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
          {!wixConfigured && (
            <span className="text-sm text-amber-600 ml-2">(Demo Data)</span>
          )}
        </h1>
        <Suspense
          fallback={
            <div className="px-4 text-gray-500">Loading categories...</div>
          }
        >
          <CategoriesList />
        </Suspense>
      </div>

      {/* New Products */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-24">
        <h1 className="text-2xl">
          New Products
          {!wixConfigured && (
            <span className="text-sm text-amber-600 ml-2">(Demo Data)</span>
          )}
        </h1>
        <Suspense
          fallback={
            <div className="mt-12 text-gray-500">Loading products...</div>
          }
        >
          <ProductList categoryid={newCategoryId} limit={4} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
