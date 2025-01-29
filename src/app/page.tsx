//"use client"

import CategoriesList from '@/components/CategoriesList'
import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'
import { wixClientServer } from '@/lib/wixClientServer'
import React from 'react'


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
const mywixClient = await wixClientServer();
const res = await mywixClient.products.queryProducts().find();
console.log(res);
  return (
    <div>
      <Slider />  
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>Featured Product</h1>
      <ProductList />
      </div>
      <div className='mt-24'>
        <h1 className='text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>Categories</h1>
      <CategoriesList />
      </div>
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>New Products</h1>
      <ProductList />
      </div>
    </div>
  )
}

export default Page
