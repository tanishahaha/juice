import React from "react";

export default function Contact(){
  return(
      <div className="flex flex-col w-full text-center justify-center p-16">
        <h1 className="text-3xl">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8 mt-16 justify-center items-center">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col text-left">
              <p className="font-serif">Name</p>
              <input type="text" className="p-2 font-serif bg-gray-300 outline-none w-[90%]" required/>
            </div>

            <div className="w-full flex flex-col text-left">
              <p className="font-serif">Mobile Number</p>
              <input type="text" className="p-2 font-serif bg-gray-300 outline-none w-[90%]" required/>
            </div>
            
            <div className="w-full flex flex-col text-left">
              <p className="font-serif">Email</p>
              <input type="email" className="p-2 font-serif bg-gray-300 outline-none w-[90%]" required/>
            </div>

            <div className="w-full flex flex-col text-left">
              <p className="font-serif">Occupation</p>
              <input type="text" className="p-2 font-serif bg-gray-300 outline-none w-[90%]" required/>
            </div>

            <div className="w-full flex flex-col text-left">
              <p className="font-serif">Message</p>
              <textarea type="text" className="p-2 font-serif bg-gray-300 outline-none w-[90%]" ></textarea>
            </div>

            <div className="w-full flex flex-col text-left">
              <button type="button" className="p-2 font-serif bg-gray-800 outline-none w-[90%] text-white rounded-[20px] mt-7" >Send</button>
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-4 text-left">
            <h1 className="text-[1.5rem] font-serif">Better yet, see us in person</h1>
            <p className="text-[1rem] font-serif">We love our customers, so feel free to visit Us</p>
            <h1 className="text-[1.5rem] font-serif mt-8">THINK JUICE</h1>
            <p className="text-[1rem] font-serif">Think Juice, Pandurang Budhkar Marg, Lower Parel, Mumbai, Maharashtra, India</p>
          </div>
        </div>
        

      </div>
    
  )
}