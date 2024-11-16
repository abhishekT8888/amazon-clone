import React from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'
import Link from 'next/link'


function Footer() {
  return (
    <Link href={"/"} className='w-full h-20 bg-amazon_light flex justify-center items-center gap-4 text-gray-400'>
        <Image className='w-24 ' src={logo} alt='amazon-logo'/>
        <p className='text-sm '>All Rights Reserved {" "}</p>
        <a className='hover:text-white  hover:underline underline-offset-4 cursor-pointer duration-300 '
        href="https://github.com/abhishekT8888">@Abhishek Tekale</a>
    </Link>
  )
}

export default Footer