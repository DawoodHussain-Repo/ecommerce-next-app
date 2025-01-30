//"use client"

import CategoriesList from '@/components/CategoriesList'
import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'
import React, { Suspense } from 'react'


const Page = async () => {

//   const mywixClient = useWixClient();


// useEffect(() => {
  
//   const getProducts = async () => {
//     try{
//     const res = await mywixClient.products.queryProducts().find();
//     console.log(res);
//     }catch(e){
//       console.log(e);
//     }
//   }
//   getProducts();

// }
// , [mywixClient])



  return (
    <div>
      <Slider />  
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>Featured Product</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <ProductList categoryid={process.env.FEATURED_PRODUCT_CATEGORY_ID!} limit={4} />
      </Suspense>
      </div>
      <div className='mt-24'>
        <h1 className='text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>Categories</h1>
        <Suspense fallback={<div>Loading...</div>}>
      <CategoriesList />
      </Suspense>
      </div>
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>New Products</h1>
        <Suspense fallback={<div>Loading...</div>}>
      <ProductList categoryid={process.env.FEATURED_PRODUCT_CATEGORY_ID!} limit={4} />
      </Suspense>
      </div>
    </div>
  )
}

export default Page
