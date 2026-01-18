import CategoriesList from '@/components/CategoriesList'
import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'
import React, { Suspense } from 'react'

// Dummy products data
const dummyProducts = [
    {
        _id: "1",
        name: "Wireless Headphones",
        slug: "wireless-headphones",
        price: { price: 99.99, discountedPrice: 79.99 },
        description: "Premium wireless headphones with noise cancellation",
        media: {
            mainMedia: {
                image: { url: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600" }
            },
            items: [
                { image: { url: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600" } },
                { image: { url: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600" } }
            ]
        }
    },
    {
        _id: "2",
        name: "Smart Watch",
        slug: "smart-watch",
        price: { price: 299.99, discountedPrice: 299.99 },
        description: "Feature-rich smartwatch with health tracking",
        media: {
            mainMedia: {
                image: { url: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600" }
            },
            items: [
                { image: { url: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600" } }
            ]
        }
    },
    {
        _id: "3",
        name: "Laptop Backpack",
        slug: "laptop-backpack",
        price: { price: 59.99, discountedPrice: 49.99 },
        description: "Durable backpack with laptop compartment",
        media: {
            mainMedia: {
                image: { url: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600" }
            },
            items: [
                { image: { url: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600" } }
            ]
        }
    },
    {
        _id: "4",
        name: "Portable Speaker",
        slug: "portable-speaker",
        price: { price: 79.99, discountedPrice: 79.99 },
        description: "Waterproof Bluetooth speaker with amazing sound",
        media: {
            mainMedia: {
                image: { url: "https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg?auto=compress&cs=tinysrgb&w=600" }
            },
            items: [
                { image: { url: "https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg?auto=compress&cs=tinysrgb&w=600" } }
            ]
        }
    }
];

const Page = () => {
    return (
        <div>
            <Slider />
            <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                <h1 className='text-2xl'>Featured Products (Demo Data)</h1>
                <div className="flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap">
                    {dummyProducts.map((product) => (
                        <div key={product._id} className="relative w-full sm:w-[45%] lg:w-[22%]">
                            <div className="relative w-full h-80 bg-gray-200 rounded-md flex items-center justify-center">
                                <span className="text-gray-500">Product Image</span>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <span className="font-medium">{product.name}</span>
                                    <span className="font-semibold">${product.price.price}</span>
                                </div>
                                <div className="text-sm text-gray-500">{product.description}</div>
                                <button className="mt-2 rounded-2xl w-max ring-1 ring-red-400 text-red-400 px-4 py-1 hover:bg-red-400 hover:text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-24'>
                <h1 className='text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>Categories (Demo)</h1>
                <div className="px-4 overflow-x-scroll scrollbar-hide">
                    <div className="flex gap-4 md:gap-8 whitespace-nowrap w-max">
                        {["Electronics", "Fashion", "Home & Garden", "Sports"].map((cat, idx) => (
                            <div key={idx} className="flex-shrink-0 min-w-[200px] sm:min-w-[300px] lg:min-w-[250px]">
                                <div className="relative bg-slate-100 w-full h-96 rounded-md flex items-center justify-center">
                                    <span className="text-gray-500">{cat}</span>
                                </div>
                                <h1 className="mt-8 font-light text-clip tracking-wide">{cat}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                <h1 className='text-2xl'>New Products (Demo Data)</h1>
                <div className="flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap">
                    {dummyProducts.slice(0, 4).map((product) => (
                        <div key={product._id} className="relative w-full sm:w-[45%] lg:w-[22%]">
                            <div className="relative w-full h-80 bg-gray-200 rounded-md flex items-center justify-center">
                                <span className="text-gray-500">Product Image</span>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <span className="font-medium">{product.name}</span>
                                    <span className="font-semibold">${product.price.price}</span>
                                </div>
                                <div className="text-sm text-gray-500">{product.description}</div>
                                <button className="mt-2 rounded-2xl w-max ring-1 ring-red-400 text-red-400 px-4 py-1 hover:bg-red-400 hover:text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
