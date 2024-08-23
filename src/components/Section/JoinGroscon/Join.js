import React from "react";
import Join1 from "../Assets/images/join.png";
import Image from "next/image";
import Link from "next/link";
import Gross from "../Assets/images/grossy.JPG";
import Gross1 from "../Assets/images/Grossymobile.JPG";
import apple from "../Assets/images/apple.png";
import andriod from "../Assets/images/android.png";

export default function Join() {
  return (
    <div className="relative flex flex-col items-center w-full py-24">
      {/* Background images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large screens */}
        <div className="hidden lg:block md:block absolute inset-0">
          <Image src={Gross} alt="gross_image" className="w-full h-full" />
        </div>
        {/* Small screens */}
        <div className="lg:hidden absolute inset-0">
          <Image src={Gross1} alt="gross2_image" className="w-full h-full" />
        </div>
      </div>
      3{/* Main content container */}
      <div className="relative flex flex-col lg:flex-row md:flex-col md:mt-0 -mt-7 items-center justify-center pt-10 md:w-3/4 w-full gap-6">
        <div className="flex-1 lg:w-1/2 w-full lg:px-3 px-8">
          <h2
           
            className="font-semibold text-[24px] lg:text-[48px] text-light-white md:text-start text-center text-white lg:-mt-60 -mt-24 lg:py-32 md:py-24 py-20 font-circular"
          >
            Join thousands who simplify their grocery process with us
          </h2>
          <div
            className="flex flex-row gap-4 md:gap-6 lg-mt-0 mt-5"
            
          >
            <Link
              href="./"
              className="p-4 font-circular md:w-[35%] w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-semibold md:text-[16px] text-[12px] bg-dark-brown">
              <Image
                src={apple}
                alt="apple_image"
                className="w-[18px] md:w-[21px]"
              />
              Get on iPhone
            </Link>
            <Link
              href="./"
              className="p-4 font-circular w-full md:w-[35%] rounded-[16px] text-white flex gap-2 items-center justify-center font-semibold md:text-[16px] text-[12px] bg-dark-brown">
              <Image
                src={andriod}
                alt="apple_image"
                className="w-[18px] md:w-[21px]"
              />
              Get on Android
            </Link>
          </div>
        </div>
        <div
          className="flex-shrink-0 lg:mt-[4rem] md:mt-0"
          
        >
          <Image
            src={Join1}
            alt="grocery_image"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md object-cover lg:w-[503.32px] md:w-[800px]"
          />
        </div>
      </div>
    </div>
  );
}
