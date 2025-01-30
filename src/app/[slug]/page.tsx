import ProductImages from '@/components/ProductImage'
import React from 'react'
import CustomizeProduct from '@/components/CustomizeProduct'
import { wixClientServer } from '@/lib/wixClientServer'
import { notFound } from 'next/navigation'
const page = async (
  {params}:
  {params:{
    slug: string
  }}
) => {
  console.log(params.slug)
    const mywixClient = await wixClientServer();
    const res = await mywixClient.products.queryProducts().eq("slug",params.slug).find();
  
  if(!res.items[0]){
    return notFound();
  }
  const product = res.items[0];
  return (
    <div className=' px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
<ProductImages items={product.media?.items} />
      </div>
<div className='w-full lg:w-1/2 flex flex-col gap-6'>
<h1 className='text-4xl font-medium '>{product.name}</h1>
<p className='text-gray-500'> {product.description}</p>
<div className='h-[2px] bg-gray-100'/>
<div className='flex flex-row items-center'>
  {product.price?.price === product.price?.discountedPrice ?(
  <h3 className='text-xl  '>${product.price?.price}</h3>):(<>
  <h3 className='text-xl text-gray-500 line-through'>${product.price?.price}</h3>
<h2 className='font-medium text-2xl'>${product.price?.discountedPrice}</h2></>)}

</div>
<div className='h-[2px] bg-gray-100'/>
<CustomizeProduct productId={product._id} variants={product.variants} productOptions={product.productOptions} />

<div className='h-[2px] bg-gray-100'/>
{product.additionalInfoSections?.map((section:any)=>(
  <div key={section.title}>
    <h2 className='text-2xl font-medium'>{section.title}</h2>
    <p className='text-gray-500'>{section.description}</p>
  </div>
))}



</div>
    </div>
  )
}

export default page
