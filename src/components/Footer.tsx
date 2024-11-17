import React from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'
import Link from 'next/link'


function Footer() {
  return (
    <div className="w-full h-20 bg-amazon_light flex justify-center items-center gap-4 text-gray-400">
      <Link href={"/"}>
        <Image className="w-24" src={logo} alt="amazon logo" />
      </Link>
      <p className="text-sm">All Rights Reserved</p>
      <a
        className="hover:text-white hover:underline underline-offset-4 cursor-pointer duration-300"
        href="https://github.com/abhishekT8888"
        target="_blank"
        rel="noopener noreferrer"
      >
        @Abhishek Tekale
      </a>
    </div>
  );
}

export default Footer