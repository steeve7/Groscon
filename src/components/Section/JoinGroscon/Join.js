import React from "react";
import Join1 from "../Assets/images/join.png";
import Image from "next/image";
import Link from "next/link";
import Gross from "../Assets/images/grossy.JPG";
import Gross1 from "../Assets/images/Grossymobile.JPG";
import apple from "../Assets/images/apple.png";
import andriod from "../Assets/images/andriod.png";

export default function Join() {
  return (
    <div className="relative flex flex-col items-center w-full mt-10">
      {/* Background images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large screens */}
        <div className="hidden lg:block md:block absolute inset-0 lg:h-[110vh]">
          <Image src={Gross} alt="gross_image" className="w-full h-full" />
        </div>
        {/* Small screens */}
        <div className="lg:hidden absolute inset-0">
          <Image src={Gross1} alt="gross2_image" className="w-full h-full" />
        </div>
      </div>
3
      {/* Main content container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center pt-10 rounded-lg md:w-3/4 w-full gap-6">
        <div className="flex-1 md:w-1/2 w-full text-center md:text-left lg:px-0 px-10">
          <h2 className="font-semibold text-[24px] lg:text-[48px]  text-white lg:-mt-28 py-20 font-circular">
            Join thousands who simplify their grocery process with us
          </h2>
          <div className="flex flex-row gap-4 md:gap-6 justify-center lg:mt-0">
            <Link
              href="./"
              className="p-4 font-circular text-white rounded-[16px] flex gap-2 justify-center items-center font-bold text-[0.6rem] md:text-base lg:text-lg w-full md:w-1/2 lg:w-[40%]"
              style={{ background: "rgba(51, 101, 84, 1)" }}
            >
              <Image
                src={apple}
                alt="apple_image"
                className="w-[0.7rem] md:w-[1rem] lg:w-[1.125rem]"
              />
              Get on iPhone
            </Link>
            <Link
              href="./"
              className="p-4 font-circular text-white rounded-[16px] gap-2 flex justify-center items-center font-bold text-[0.6rem] md:text-base lg:text-lg w-full md:w-1/2 lg:w-[40%]"
              style={{ background: "rgba(51, 101, 84, 1)" }}
            >
              <Image
                src={andriod}
                alt="apple_image"
                className="w-[0.7rem] md:w-[1rem] lg:w-[1.125rem]"
              />
              Get on Android
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-[9.3rem]">
          <Image
            src={Join1}
            alt="grocery_image"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md object-cover"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
