import React from "react";
import Frame from '../Assets/images/hero.png'
import apple from '../Assets/images/apple.png'
import andriod from '../Assets/images/android.png'
import Link from "next/link";
import Image from "next/image";

export default function Grocery() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full lg:py-36 md:py-20 py-[3rem] space-y-14 md:space-y-0 md:px-14 px-7 bg-[#e6f7e6]">
      {/* Text Content */}
      <div className="lg:w-[600px] md:w-full space-y-5 lg:mt-0 mt-16">
        {/* Title */}
        <h2
          
          className="font-semibold lg:text-[3.75rem] md:text-3xl text-[36px] flex flex-col font-circular text-dark-color lg:gap-10 md:gap-2 lg:mb-10"
        >
          Grocery
          <span>Management,</span>
          <span>Simplified for you</span>
        </h2>

        {/* Description */}
        <p
          
          className="lg:text-[1rem] leading-7 md:text-sm text-[16px] font-circular text-light-green font-normal"
        >
          Groscan is your personal AI grocery and nutrition assistant that
          simplifies grocery management by allowing you to scan your shopping
          list, track expenses, make informed nutritional choices, and minimize
          waste. Join thousands of users already benefiting from Groscan.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-row gap-2 w-full"
          
        >
          <Link
            href="./"
            className="p-4 font-circular md:w-[181px] w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-semibold md:text-[16px] text-[12px] bg-dark-brown">
            <Image
              src={apple}
              alt="apple_image"
              className="w-[18px] md:w-[21px]"
            />
            Get on iPhone
          </Link>
          <Link
            href="./"
            className="p-4 font-circular md:w-[181px] w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-semibold md:text-[16px] text-[12px] bg-dark-brown">
            <Image
              src={andriod}
              alt="andriod_image"
              className="w-[18px] md:w-[21px]"
            />
            Get on Android
          </Link>
        </div>
      </div>

      {/* Image */}
      <div
        
      >
        <Image
          src={Frame}
          alt="Grocery Management"
          className="md:w-[462px] w-[350px] object-contain"
        />
      </div>
    </div>
  );
}
