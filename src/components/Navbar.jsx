"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiFillFacebook, AiOutlineInstagram,AiFillCloseCircle } from 'react-icons/ai';
import { logo } from '../../imgs/imageIndex'
import Link from "next/link";

export default function Navbar(){
  const [menuOpen,setMenuOpen]=useState(false);

  const handleMenuClick=()=>{
    setMenuOpen(!menuOpen);
  }
  return(
    <div >
      <div className="flex w-full justify-between p-[8rem] pt-8 pb-8 items-center fixed bg-white z-10">
        <div className="">
          <AiOutlineMenu className="text-[1.5rem] hover:opacity-80 cursor-pointer" onClick={handleMenuClick}/>
        </div>
        <div className="w-[6rem]">
          <Link href="/">
            <Image width={100} height={100} alt="Think Juice" src={logo} className="w-full h-full cursor-pointer"/>  
          </Link>
        </div>
        <div className="hidden gap-2 justify-center items-center md:flex"> 
          <Link href="https://www.facebook.com/thinkjuiceindia">
            <AiFillFacebook className="text-[1.5rem] text-blue-600" />
          </Link>
          <Link href="https://www.instagram.com/thinkjuice_mumbai/">
            <AiOutlineInstagram className="text-[1.5rem] text-pink-600" />
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="w-[100%] h-full fixed top-0 left-0 bottom-0 bg-transparent z-10">
          <div className="w-[100%] h-full bg-gray-100 p-10 flex cursor-pointer flex-col md:w-[30%]">
            <div className="w-[100%] flex justify-end mb-4">
            <AiFillCloseCircle onClick={handleMenuClick} className="text-[2rem] hover:text-red-700"/>

            </div>
            <div className="w-[100%] flex justify-end mt-6 md:hidden">
            <Link href="https://www.facebook.com/thinkjuiceindia">
            <AiFillFacebook className="text-[1.5rem] text-blue-600" />
          </Link>
          <Link href="https://www.instagram.com/thinkjuice_mumbai/">
            <AiOutlineInstagram className="text-[1.5rem] text-pink-600" />
          </Link>

            </div>

            
            <div className="w-[100%] mt-4 text-[1.5rem] p-8 flex flex-col gap-5 uppercase">
              <Link href="/">
              <h1 className="font-serif focus:underline hover:opacity-80 underline">Home</h1>
              </Link>
              <Link href="/order">
              <h1 className="font-serif hover:underline hover:opacity-80">Order Now</h1>
              </Link>
              <Link href="/gallery">
              <h1 className="font-serif hover:underline hover:opacity-80">Photo gallery</h1>
              </Link>
              <Link href="/contact">
              <h1 className="font-serif hover:underline hover:opacity-80">Contact Us</h1>
              </Link>
            </div>
          </div>
          
        </div>
      )}
    </div>
  )
}