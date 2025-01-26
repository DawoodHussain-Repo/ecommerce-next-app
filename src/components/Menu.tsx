"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Menu = () => {
const [ open , setOpen]= useState(false);
    return (
    <div>
   <Image src="/menu.png" className='cursor-pointer' width={28} height={28} onClick={() => setOpen(!open)} alt={''} />
   {open &&(
    <div className='bg-black flex flex-col items-center gap-8  text-xl p-12 tracking-wide absolute top-20 left-0 z-10 text-white w-full h-[calc(100vh)]'>
    <Link href='/'>Homepage</Link>
    <Link href='/about'>Shop</Link>
    <Link href='/contact'>Deals</Link>
    <Link href='/contact'>About</Link>
    <Link href='/contact'>Contact</Link>
    <Link href='/contact'>Logout</Link>
    <Link href='/contact'>Cart(1)</Link>
    </div>
    )
    }
    </div>
  
  )
}

export default Menu
