import React from 'react'
import Image from 'next/image'
import Woman from '../../../public/woman.png'
import Filter from '../../components/Filter'
import ProductList from '@/components/ProductList'
const page = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className='bg-pink-50 px-4 md:flex hidden justify-between h-64'>
        {/*Campaign*/}
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>
            Niggas will get their ass ponded <br /> for 50$
          </h1>
          <button className='rounded-3xl bg-red-400 text-sm text-white w-max py-3 px-5'>
            Buy Now
          </button>
        </div>
        <div className='relative w-1/3'>
          <Image 
            src={Woman} 
            alt='' 
            className='object-cover w-full h-full' 
          />
        </div>
      </div>
      <Filter />
      <h1 className='mt-12 text-xl font-semibold '>Shoes For You</h1>
      <ProductList />
    </div>
  )
}

export default page
