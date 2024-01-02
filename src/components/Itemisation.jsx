"use client";
import Image from "next/image";
import React from "react";
import {
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../../imgs/imageIndex";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Itemisation(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const data = [img5, img6, img6, img7, img8, img9];

  return(
    <div className="text-center w-full">
        <h1 className="text-3xl mt-24">Itemisation</h1>
        <div className="">
          <Slider {...settings} className="">
            {data.map((el) => (
              <div className="w-[24rem] h-[26rem]">
                <Image src={el} className="m-4" width={350} height={350} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
  )
}