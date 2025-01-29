import ProductImages from '@/components/ProductImage'
import React from 'react'
import CustomizeProduct from '@/components/CustomizeProduct'
const page = () => {
  return (
    <div className=' px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
<ProductImages />
      </div>
<div className='w-full lg:w-1/2 flex flex-col gap-6'>
<h1 className='text-4xl font-medium '>Product Name</h1>
<p className='text-gray-500'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem maxime dolor ut dolorum ipsum eum, praesentium voluptates, temporibus tempore atque neque? Quisquam voluptatem iusto ullam laborum pariatur beatae consequuntur?</p>
<div className='h-[2px] bg-gray-100'/>
<div className='flex flex-row items-center'>
  <h3 className='text-xl text-gray-500 line-through'>$100</h3>
<h2 className='font-medium text-2xl'>$70</h2>

</div>
<div className='h-[2px] bg-gray-100'/>
<CustomizeProduct />

<div className='h-[2px] bg-gray-100'/>
<div>
  <h2 className='text-2xl font-medium'>Description</h2>
  <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit
    . Quisquam voluptatem iusto ullam laborum pariatur beatae consequuntur?</p>
</div>
<div>
  <h2 className='text-2xl font-medium'>Description</h2>
  <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit
    . Quisquam voluptatem iusto ullam laborum pariatur beatae consequuntur?</p>
</div>
<div>
  <h2 className='text-2xl font-medium'>Description</h2>
  <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit
    . Quisquam voluptatem iusto ullam laborum pariatur beatae consequuntur?</p>
</div>



</div>
    </div>
  )
}

export default page
