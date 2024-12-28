import React from 'react'
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '@/type.d';
import { signOut } from 'next-auth/react';
import { removeUser } from '@/store/nextSlice';


const HeaderBottom = () => {
  const {userInfo} = useSelector((state:StateProps)=>state.next);
  const dispatch = useDispatch();
  const handleSignOut = () =>{
    signOut();
    dispatch(removeUser());
  }
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
      
      {userInfo && (
    <button
        onClick={handleSignOut}
        className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent 
                   hover:border-red-600 hover:text-red-500 text-amazon_yellow cursor-pointer duration-300"
    >
        Sign Out
    </button>
)}

    </div>
  )
}

export default HeaderBottom