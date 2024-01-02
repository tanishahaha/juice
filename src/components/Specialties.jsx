import React from "react";
import Image from "next/image";
import {
  img2,
  img3,
  img4,
} from "../../imgs/imageIndex";

export default function Specialties(){
  return(
    <div className="text-center w-full">
        <h1 className="text-3xl mt-24">Our Specialities</h1>
        <div className="w-full flex flex-col text-center justify-center items-center pt-8 gap-6">
          <Image src={img2} width={500} height={500} />
          <Image src={img3} width={500} height={500} />
          <Image src={img4} width={500} height={500} />
        </div>
      </div>
  )
}