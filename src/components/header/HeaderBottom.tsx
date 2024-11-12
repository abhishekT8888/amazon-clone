import React from 'react'
import { LuMenu } from "react-icons/lu";


const HeaderBottom = () => {
  return (
    <div className='w-full h-10 text-sm text-white px-4 flex items-centre bg-amazon_light'>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'><LuMenu/>ALL</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Todays Deal</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Amazon miniTV</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Best Seller</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Mobiles</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Customer Service</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Electronics</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>New Releases</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Home & Kitchen</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Fashion</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Amazon Pay</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-white duration-300 cursor-pointer'>Sell</p>
      <p className='flex items-center gap-1 px-2 h-10 border border-transparent hover:border-red-600 hover:text-amazon_yellow duration-300 cursor-pointer'>Sign Out</p>
    </div>
  )
}

export default HeaderBottom