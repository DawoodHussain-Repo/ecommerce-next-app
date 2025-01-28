import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
      <Slider />  
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>Featured Product</h1>
      <ProductList />
      </div>
    </div>
  )
}

export default page
