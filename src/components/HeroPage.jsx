"use client";
import Image from "next/image";
import React from "react";
import {
  img1
} from "../../imgs/imageIndex";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { About, Contact, Itemisation, Reviews, Specialties } from "./componentIndex";
import Link from "next/link";
import {
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

function HeroPage() {
 
  return (
    <div className="p-[1rem] md:p-[8rem] pt-8">
      <div className="text-center">
        <Image src={img1} width={1000} height={800} className="w-[100%]" />
        <p className="font-serif text-gray-600 capitalize mt-4 tracking-wider text-[1.4rem]">
          Health in a cup
        </p>
      </div>

      <About/>

      <Specialties/>

      <Itemisation />

      <div>
        <Contact />
        <p className="text-gray-600 font-serif text-[14px] pl-16">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="underline font-serif">Privacy Policy</span> and{" "}
          <span className="underline font-serif">Terms of Service</span> apply.
        </p>
      </div>

      <div class="relative w-full h-96 mt-24">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3015408209208!2d72.8303603!3d19.0064298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceeb7b967e33%3A0x3ace3d609ae10dda!2sThink%20Juice!5e0!3m2!1sen!2sin!4v1704124387242!5m2!1sen!2sin"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <div className="mt-24 w-full text-center justify-center">
        <h1 className="text-3xl">Social</h1>
        <div className="w-[100%] flex justify-center mt-6">
          <Link href="https://www.facebook.com/thinkjuiceindia">
            <AiFillFacebook className="text-[3rem] text-blue-600" />
          </Link>
          <Link href="https://www.instagram.com/thinkjuice_mumbai/">
            <AiOutlineInstagram className="text-[3rem] text-pink-600" />
          </Link>
        </div>
      </div>

      <Reviews />

      <div className="text-center mt-16">
        <div className="flex w-full justify-between">
          <p className="font-serif text-gray-600">
            Copyright © 2023 THINK JUICE - All Rights Reserved.
          </p>
          <p className="font-serif text-gray-600">Powered by THINK JUICE</p>
        </div>
        <Link href="/order">
          <p className="mt-12 font-serif text-gray-600 underline uppercase text-[1.5rem]">
            Order Now
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HeroPage;
