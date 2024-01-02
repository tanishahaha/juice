"use client";
import Image from "next/image";
import React from "react";
import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
} from "../../imgs/imageIndex";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AiFillStar,
  AiFillGoogleCircle,
} from "react-icons/ai";

export default function Reviews(){
  const reviewsettings = {
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
  const reviewData = [
    {
      name: "Mayuresh D Narkar",
      review: "This customer did not write a review.",
      img: p1,
      date: "18/12/2023",
    },
    {
      name: "SIDDHI CHAVAN",
      review: "This customer did not write a review.",
      img: p2,
      date: "7/12/2023",
    },
    {
      name: "Sanket More",
      review: "Superb taste, must try crazy chocolate.",
      img: p3,
      date: "7/12/2023",
    },
    {
      name: "Khushi Choudhary",
      review: "This customer did not write a review.",
      img: p4,
      date: "23/12/2023",
    },
    {
      name: "Wahid Patel",
      review: "amazing milkshakes",
      img: p5,
      date: "19/12/2023",
    },
    {
      name: "Sayli Kajrekar",
      review: "This customer did not write a review.",
      img: p6,
      date: "19/12/2023",
    },
  ];
  return(
    <div className="text-center w-full">
        <h1 className="text-3xl mt-24 mb-8">Reviews</h1>

        <div
          className="bg-cover p-4 md:p-16"
          style={{ backgroundImage: `url('/bgreview.jpg')` }}
        >
          <div className="flex gap-12 mt-16 justify-center items-center w-full text-end text-white mb-8">
            <AiFillGoogleCircle className="text-[3rem] text-white" />
            <p className="text-[2.5rem] text-white font-serif">4.3</p>

            <div>
              <p className="font-serif text-[1.5rem]">Think Juice</p>
              <div className="flex mt-2">
                <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                <AiFillStar className=" text-[1.5rem]" />
              </div>
              <p className="font-serif text-[1rem]">1004 Reviews</p>
            </div>
          </div>
          <Slider {...reviewsettings} className="">
            {reviewData.map((el) => (
              <div className="w-[24rem] bg-white m-4 flex flex-col justify-center items-center text-center">
                <div className="flex w-full text-center justify-center items-center flex-col p-4">
                  <Image
                    src={el.img}
                    className="m-4 text-center"
                    width={100}
                    height={100}
                  />
                  <div className="flex gap-1 mt-2">
                    <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                    <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                    <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                    <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                    <AiFillStar className="text-yellow-400 text-[1.5rem]" />
                  </div>

                  <p className="font-serif mt-12 text-black">"{el.review}"</p>

                  <div className="flex gap-1 mt-16 justify-between w-full items-end text-end">
                    <AiFillGoogleCircle className="text-[1.2rem]" />
                    <div>
                      <p className="font-serif text-[.9rem]">{el.name}</p>
                      <p className="font-serif text-[.7rem]">{el.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
  )
}