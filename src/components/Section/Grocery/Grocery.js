'use client'
import React from 'react'
import storeImage from '../Assets/images/Frame.png'
import Link from 'next/link';
import Image from 'next/image';
import { FaApple, FaPlay } from "react-icons/fa";
import {motion} from 'framer-motion'

export default function Grocery() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full lg:py-36 py-20 px-7 md:px-20 space-y-10 md:space-y-0 bg-[#e6f7e6]">
      {/* Text Content */}
      <div className="lg:w-[55%] md:w-full space-y-5">
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
          className="font-bold lg:text-4xl md:text-3xl text-xl flex flex-col font-[Euclid Circular A] text-[#161616]"
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
          className="lg:text-base md:text-sm text-xs font-[Euclid Circular A] text-[#454545]"
        >
          Groscan is your personal AI grocery and nutrition assistant that
          simplifies grocery management by allowing you to scan your shopping
          list, track expenses, make informed nutritional choices, and minimize
          waste. Join thousands of users already benefiting from Groscan.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
          className="flex flex-col sm:flex-row gap-2 w-full"
        >
          <Link
            href="./"
            className="p-4 text-white bg-[#336548] rounded-lg flex justify-center items-center gap-2 font-bold lg:text-base md:text-sm text-xs"
          >
            <FaApple />
            Get on iPhone
          </Link>
          <Link
            href="./"
            className="p-4 text-white bg-[#336548] rounded-lg flex justify-center items-center gap-2 font-bold lg:text-base md:text-sm text-xs"
          >
            <FaPlay />
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
          src={storeImage}
          alt="Grocery Management"
          className="md:w-[412px] w-[250px] object-contain"
        />
      </motion.div>
    </div>
  );
}
