import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { wixClientServer } from '@/lib/wixClientServer'
import { products } from '@wix/stores';
import Pagination from './Pagination';

const productPerPage = 8;
const ProductList = async (
  {
    categoryid,
    limit,
    searchParams,
  }
    :
    {
      categoryid:string;
      limit?:number;
      searchParams?:any;
    }) => {


  const mywixClient = await wixClientServer();
  
  const productQuery = await mywixClient.products   .queryProducts()
  .startsWith("name", searchParams?.name || "")
  .eq("collectionIds", categoryid)
  .hasSome(
    "productType",
    searchParams?.type ? [searchParams.type] : ["physical", "digital"]
  )
  .gt("priceData.price", searchParams?.min || 0)
  .lt("priceData.price", searchParams?.max || 999999)
  .limit(limit || productPerPage)
  .skip(
    searchParams?.page
      ? parseInt(searchParams.page) * (limit ||productPerPage)
      : 0
  );
  //.find();

  if(await searchParams?.sort)
    {
      const [sortType,sort] =searchParams.sort.split(" ");
      if(sortType=='asc')
        {
          productQuery.ascending(sort);
        }else if(sortType=='desc')
        {
          productQuery.descending(sort);
        }

    }

    const res = await productQuery.find();

  return (

    <div className="flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product:products.Product) => (

    
      <Link key={product._id} href={"/"+product.slug} className="relative w-full sm:w-[45%] lg:w-[22%]">
        {/* Image Container */}
        <div className="relative w-full h-80">
          <Image
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-700"
            src={product.media?.mainMedia?.image?.url || "https://images.pexels.com/photos/30373532/pexels-photo-30373532/free-photo-of-cozy-winter-coffee-moment-over-snowy-stockholm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
            alt="product"
            fill
            sizes="25vw"
          />
         {product.media?.items && <Image
            className="absolute object-cover rounded-md z-0"
               src={product.media?.items[1].image?.url || "https://images.pexels.com/photos/30373532/pexels-photo-30373532/free-photo-of-cozy-winter-coffee-moment-over-snowy-stockholm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
         alt="product-hover"
            fill
            sizes="25vw"
          />
          }
        </div>
        {/* Text and Button */}
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          <div className="text-sm text-gray-500">{product.description}</div>
          <button className="mt-2 rounded-2xl w-max ring-1 ring-red-400 text-red-400 px-4 py-1 hover:bg-red-400 hover:text-white">
            Add to Cart
          </button>
        </div>
      </Link>
      
  ))
  
}  
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />

    </div>
  );
};

export default ProductList;
