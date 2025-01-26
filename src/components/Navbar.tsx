import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative '>
      {/* Mobile  */}
      <div className='flex flex-row justify-between items-center h-full md:hidden '>
      
      <Link href='/' className='text-2xl  tracking-wide'>
       LAMA
      </Link>
      
      <Menu />
      </div>
{/* Desktop */}
<div className='hidden md:flex gap-8  justify-between items-center h-full'>
    <div className='w-1/3 flex items-center gap-8 '>
    <Link href='/' className='text-2xl  tracking-wide'>
      LAMA
      </Link>
   <div className=' gap-8 hidden xl:flex'>
   <Link href='/about' className='text-lg hover:underline tracking-wide'>
      Homepage
      </Link>
      <Link href='/about' className='text-lg hover:underline tracking-wide'>
      Shop
      </Link>
      <Link href='/about' className='text-lg hover:underline tracking-wide'>
      Deals
      </Link>
      <Link href='/about' className='text-lg hover:underline tracking-wide'>
      About
      </Link>
      <Link href='/about' className='text-lg hover:underline tracking-wide'>
      Contact
      </Link>
   </div>
    </div>
    
    <div className='w2/3 flex items-center justify-end gap-8'>
    <SearchBar />
     <NavIcons />
    </div>

</div>
    </div>
  )
}

export default Navbar
