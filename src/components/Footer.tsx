import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FB from '../../public/facebook.png'
import IG from '../../public/instagram.png'
import VISA from '../../public/visa.png'
import MASTERCARD from '../../public/money.png'
import CASH from '../../public/dollar.png'
import STRIPE from '../../public/stripe.png'

const Footer = () => {
  return (
    <div className=' px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24 bg-gray-100 py-24'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        <div className='lg:w-1/4 md:w-1/2 w-full flex flex-col gap-8'>
          <Link href='/' className='text-2xl tracking-wide'>
            LAMA
          </Link>
          <p>1234 Example St, City, Country</p>
          <span className='font-semibold '>Email: contact@lama.com</span>
          <span className='font-semibold '>Phone: +123456789</span>
          <div className='flex space-x-4'>
            {/* Social Media Links */}
            <Link href='https://facebook.com' target="_blank">
              <Image src={FB} alt='Facebook' width={16} height={16} />
            </Link>
            <Link href='https://instagram.com' target="_blank">
              <Image src={IG} alt='Instagram' width={16} height={16} />
            </Link>
          </div>
        </div>
        
        {/* Center Links */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Company</h1>
            <div className='flex flex-col gap-6'>
              <Link href={'/'}>Homepage</Link>
              <Link href={'/'}>Shop</Link>
              <Link href={'/'}>Deals</Link>
              <Link href={'/'}>About</Link>
              <Link href={'/contact'}>Contact Us</Link> {/* Updated link */}
            </div>
          </div>
          
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Resources</h1>
            <div className='flex flex-col gap-6'>
            <Link href={'/privacy'}>Privacy Policy</Link> {/* New link */}
              <Link href={'/blog'}>Blog</Link> {/* Updated link */}
              <Link href={'/faq'}>FAQ</Link> {/* New link */}
              <Link href={'/terms'}>Terms & Conditions</Link> {/* New link */}
              <Link href={'/privacy'}>Privacy Policy</Link> {/* New link */}
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Social</h1>
            <div className='flex flex-col gap-6'>
              <Link href={'/facebook'}>Facebook</Link> {/* Updated link */}
              <Link href={'/instagram'}>Instagram</Link> {/* Updated link */}
              <Link href={'/twitter'}>Twitter</Link> {/* New link */}
              <Link href={'/linkedin'}>LinkedIn</Link> {/* New link */}
              
              <Link href={'/youtube'}>Youtube</Link> {/* New link */}
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className='lg:w-1/4 md:w-1/2 w-full flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Subscribe to our newsletter to get the latest updates on our products.</p>
          <div className='flex '>
            <input 
              type='text'
              placeholder='Email Address'
              className='p-4 w-3/4'
            />
            <button className='w-1/4 bg-red-400 text-white'>JOIN</button>
          </div>
          <span className='font-semibold'>Secure Payments</span>
          <div className='flex flex-row gap-4'>
            <Image src={VISA} alt='VISA' width={40} height={40} />
            <Image src={MASTERCARD} alt='MASTERCARD' width={40} height={40} />
            <Image src={CASH} alt='CASH' width={40} height={40} />
            <Image src={STRIPE} alt='STRIPE' width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='text-center mt-12 font-semibold'>
        <p>&copy; 2025 LAMA. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
