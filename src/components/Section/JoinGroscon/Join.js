"use client";
import React from "react";
import Join1 from "../Assets/images/join.png";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Gross from "../Assets/images/grossy.JPG";
import Gross1 from "../Assets/images/Grossymobile.JPG";

export default function Join() {
  return (
    <div className="relative flex flex-col items-center w-full lg:px-10 px-7 mt-10">
      {/* Background images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large screens */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src={Gross}
            alt="gross_image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        {/* Small screens */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src={Gross1}
            alt="gross2_image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center pt-10 rounded-lg md:w-3/4 w-full gap-6">
        <div className="flex-1 md:w-1/2 w-full text-center md:text-left lg:space-y-20">
          <motion.h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white lg:-mt-7 py-10">
            Join thousands who simplify their grocery process with us
          </motion.h2>
          <motion.div className="flex flex-row gap-4 md:gap-6 justify-center mt-36 lg:mt-0">
            <Link
              href="./"
              className="p-4 text-white rounded-lg flex justify-center items-center font-bold text-sm md:text-base lg:text-lg w-full md:w-1/2 lg:w-1/2"
              style={{ background: "rgba(51, 101, 84, 1)" }}
            >
              <FaApple className="mr-2" />
              Get on iPhone
            </Link>
            <Link
              href="./"
              className="p-4 text-white rounded-lg flex justify-center items-center font-bold text-sm md:text-base lg:text-lg w-full md:w-1/2 lg:w-1/2"
              style={{ background: "rgba(51, 101, 84, 1)" }}
            >
              <FaPlay className="mr-2" />
              Get on Android
            </Link>
          </motion.div>
        </div>
        <motion.div className="flex-shrink-0">
          <Image
            src={Join1}
            alt="grocery_image"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md object-cover"
            width={400}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
}
