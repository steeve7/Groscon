'use client'
import React, {useState, useEffect} from "react";
import Frame from '../Assets/images/hero.png'
import Frame1 from '../Assets/images/Home.png'
import apple from '../Assets/images/apple.png'
import andriod from '../Assets/images/android.png'
import leftImage from '../Assets/images/leftimage.png'
import leftImage1 from '../Assets/images/leftimage1.png'
import rightImage from '../Assets/images/rightimage.png'
import rightImage1 from '../Assets/images/rightimage1.png'
import Link from "next/link";
import Image from "next/image";

export default function Grocery() {

const [showCorners, setShowCorners] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowCorners(true);
  }, 100); // Delay before corner images start appearing

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full lg:py-36 md:py-20 py-[3rem] space-y-14 md:space-y-0 md:px-14 px-7 bg-[#e6f7e6]">
      {/* Text Content */}
      <div className="lg:w-[640px] md:w-[450px] w-full space-y-10 lg:mt-0 mt-16">
        {/* Title */}
        <h2 className="font-semibold lg:text-[3.75rem] md:text-3xl text-[36px] flex flex-col font-circular text-dark-color lg:gap-10 md:gap-2 lg:mb-10">
          Grocery
          <span>Management,</span>
          <span>Simplified for You</span>
        </h2>

        {/* Description */}
        <p className="lg:text-[1rem] leading-7 md:text-sm text-[16px] font-circular text-light-green font-normal lg:w-[600px] w-full">
          Groscan is your personal AI grocery and nutrition assistant that
          simplifies grocery management by allowing you to scan your shopping
          list, track expenses, make informed nutritional choices, and minimize
          waste. Join thousands of users already benefiting from Groscan.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-6 w-full">
          <Link
            href="./"
            className="p-4 font-circular md:w-[181px] w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-semibold md:text-[16px] text-[12px] bg-dark-brown"
          >
            <Image
              src={apple}
              alt="apple_image"
              className="w-[18px] md:w-[21px]"
            />
            Get on iPhone
          </Link>
          <Link
            href="./"
            className="p-4 font-circular md:w-[181px] w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-semibold md:text-[16px] text-[12px] bg-dark-brown"
          >
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
      <div className="relative lg:w-[352px] md:w-[152px]">
        {/* Main Image */}
        <Image
          src={Frame1}
          alt="Main"
          className="md:w-[273px] w-[164px] object-contain"
        />

        {/* Corner Images */}
        {showCorners && (
          <div>
            <Image
              src={leftImage}
              alt="Top Left"
              className={`absolute lg:w-[157px] md:w-[110px] w-[102px] lg:mt-[6.5rem] md:mt-[4.5rem] mt-20 lg:-left-28 md:-left-16 -left-16 top-0 ${
                showCorners ? "slide-in" : "opacity-0"
              }`}
            />
            <Image
              src={leftImage1}
              alt="Bottom Left"
              className={`absolute lg:w-[215px] md:w-[120px] w-[116px] md:-bottom-10 -bottom-4 lg:-left-28 md:-left-12 -left-12 ${
                showCorners ? "slide-in bounce-animation" : "opacity-0"
              }`}
            />
            <Image
              src={rightImage}
              alt="Top Right"
              className={`absolute lg:w-[117px] md:w-[70px] w-[99px] top-2 lg:right-0 md:-right-12 -right-20 ${
                showCorners ? "slide-in bounce-animation" : "opacity-0"
              }`}
            />
            <Image
              src={rightImage1}
              alt="Bottom Right"
              className={`absolute lg:w-[182px] md:w-[80px] w-[110px] bottom-6 md:-right-10 -right-[4.5rem] ${
                showCorners ? "slide-in" : "opacity-0"
              }`}
            />
          </div>
        )}
      </div>{" "}
    </div>
  );
}
