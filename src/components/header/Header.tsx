import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../images/logo.png'
import Cart from '../../images/cart.png';
import { IoLocationOutline } from "react-icons/io5";
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { useDispatch, UseDispatch , useSelector } from 'react-redux';
import {StateProps} from "../../type.d"
import { useSession,signIn,signOut } from 'next-auth/react';
import { addUser } from '@/store/nextSlice';
import { useEffect } from 'react';



 const Header = () => {
  const dispatch = useDispatch();
  const {productData,favoriteData,userInfo}=useSelector(
    (state:StateProps)=>state.next || {}
  );
  const{data:session}=useSession();
  console.log(userInfo)

  useEffect(()=>{
    if(session){
      dispatch(addUser(
        {
          name:session?.user?.name,
          email:session?.user?.email,
          image:session?.user?.image,
          
        }
      ))
    }
  },[session]);

  
  return (
    <div className='w-full h-15 bg-amazon_blue text-lightText sticky top-0 z-50'>
      <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>

        {/* Amazon logo */}
        <Link href={"/"} className=' px-2 py-3 border border-transparent hover:border-white cursor-pointer duration-300 
        items-center justify-center h-[70%]'>
          <Image className='w-28 object-contain' src={logo} alt='logo of amazon'/>
        </Link>

        {/* delivery to */}
        <div className='inline-flex border border-transparent hover:border-white px-2 py-1 duration-300 cursor-pointer'>
          <IoLocationOutline className='mt-5 mr-2' />
          <div className='text-sm'>
            <p>Delivery to</p>
            <p className='font-bold uppercase text-white'>India</p>
          </div>
        </div>

        {/* Searchbar */}
        <div className='flex-1 h-10 hidden md:inline-flex items-center justify-center relative ml-5'>
          <input
            type="search"
            placeholder="Search Amazon.in"
            className='w-full h-full rounded-lg py-2 px-5 text-sm text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
          />
          <span className='bg-amazon_yellow text-2xl text-black h-full w-12 flex items-center justify-center rounded-md absolute right-0 rounded-br-md  focus-visible:border-amazon_yellow'>
            <HiOutlineSearch/>
          </span>
        </div>

       {/* Sign in */}
        {userInfo?<div 
                 className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
                    <img src={userInfo.image} alt="userImage"
                    className="w-8 h-8 rounded-full object-cover"/>
                    <div className="text-xs text-gray-100 flec flex-col
                    justify-between">
                        <p className="text-white font-bold">{userInfo.name}</p>
                        <p>{userInfo.email}</p>
                    </div>
                </div>:<div onClick={()=>signIn()} className="text-xs text-gray-100 flex flex-col justify-center px-2 border
            border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
                <p>Hello, sign in</p>
                <p className="text-white font-bold flex">Account & Lists{" "}<span>
                    <BiCaretDown/></span></p>
            </div>
            }

        {/* Favourite */}
        <div className=' px-2 py-1 border border-transparent hover:border-white cursor-pointer duration-300 
        items-center justify-center h-[70%]'>
          <p>Marked</p>
          <p className='text-white font-bold'>& Favourite</p>
          {
            favoriteData.length>0 && (
              <span>
                {favoriteData.length  }
              </span>
            )
          }
        </div>

        {/* Cart button */}
        <Link href={"/cart"} className='flex  px-2 py-1 border border-transparent hover:border-white cursor-pointer duration-300 
          items-center justify-center h-[70%] relative'>
          <Image className='w-auto object-contain' src={Cart}  alt='image p=of shopping cart '/>
          <p className='text-ml text-white font-bold mt-3'>Cart</p>
          <span className='absolute text-amazon_yellow text-2xl top-1 left-[50px] font-bold'>
            {productData ? productData.length:0}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header;