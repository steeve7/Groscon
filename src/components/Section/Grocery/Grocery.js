'use client'
import React from "react";
import Frame from '../Assets/images/Frame.png'
import apple from '../Assets/images/apple.png'
import andriod from '../Assets/images/andriod.png'
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'

export default function Grocery() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full lg:py-36 md:py-20 py-[3rem] space-y-14 md:space-y-0 md:px-14 px-7 bg-[#e6f7e6]">
      {/* Text Content */}
      <div className="lg:w-[600px] md:w-full space-y-5 lg:mt-0 mt-16">
        {/* Title */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
          className="font-semibold lg:text-[3.75rem] md:text-3xl text-[36px] flex flex-col font-circular text-dark-color lg:gap-10 md:gap-2 lg:mb-10"
        >
          Grocery
          <span>Management,</span>
          <span>Simplified for you</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
          className="lg:text-[1rem] leading-7 md:text-sm text-[16px] font-circular text-light-green font-normal"
        >
          Groscan is your personal AI grocery and nutrition assistant that
          simplifies grocery management by allowing you to scan your shopping
          list, track expenses, make informed nutritional choices, and minimize
          waste. Join thousands of users already benefiting from Groscan.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-row gap-2 w-full"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
        >
          <Link
            href="./"
            className="p-4 font-circular lg:w-[30%] w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-bold text-[14px]"
            style={{ background: "rgba(51, 101, 84, 1)" }}
          >
            <Image src={apple} alt="apple_image" />
            Get on iPhone
          </Link>
          <Link
            href="./"
            className="p-4 font-circular lg:w-[30%] w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-bold text-[14px]"
            style={{ background: "rgba(51, 101, 84, 1)" }}
          >
            <Image src={andriod} alt="andriod_image" />
            Get on Android
          </Link>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
        }}
      >
        <Image
          src={Frame}
          alt="Grocery Management"
          className="md:w-[462px] w-[350px] object-contain"
        />
      </motion.div>
    </div>
  );
}
