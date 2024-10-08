'use client'
import React from "react";
import Image from "next/image";
import Features5 from "../Assets/images/iphone.png";
import Features6 from "../Assets/images/features5.png";
import Features4 from "../Assets/images/Features6.png";
import check from '../Assets/images/icon-check.png'
import {motion} from 'framer-motion'

export default function Ai() {
  const lists = [
    {
      icon: check,
      title: "Reduce food waste",
    },
    {
      icon: check,
      title: "Maintain financial discipline",
    },
    {
      icon: check,
      title: "Achieve dietary goals",
    },
    {
      icon: check,
      title: "Save time and effort",
    },
  ];
  return (
    <div className="flex flex-col justify-center w-full">
      <div
        className="flex md:flex-row flex-col justify-around items-center w-full pt-10 mt-10"
        style={{ background: "rgba(241, 141, 61, 1)" }}
      >
        <div className="flex flex-col justify-center items-center md:w-[40%] w-full gap-4 lg:px-0 px-7">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="font-semibold lg:text-[48px] md:text-[30px] text-[24px] w-full font-circular text-white"
          >
            Do More with Our AI-powered Features
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="w-full font-circular text-start md:text-[18px] text-[16px] text-white font-normal"
          >
            Chat with our AI assistant, discover healthier recipes and generate
            recipes using leftover groceries for a sustainable meal plan.
          </motion.p>
        </div>
        <motion.div
          className="lg:mt-0 mt-10"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Image
            src={Features5}
            alt="features_image"
            className="md:w-[360px] md:flex hidden"
          />
          <Image
            src={Features6}
            alt="features_image"
            className="md:w-[343px] md:hidden flex"
          />
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col justify-around items-center gap-6 bg-custom-gray py-20 lg:px-4 px-7">
        <div className="flex flex-col text-left md:w-[40%] w-full gap-4">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="font-semibold lg:text-[48px] md:text-[30px] text-[24px] w-full font-circular text-dark-color"
          >
            Your Path to Easier Grocery Management and Shopping
          </motion.h2>
          {lists.map((list, i) => (
            <motion.div
              key={i}
              className="flex flex-row items-center gap-2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Image
                src={list.icon}
                alt="check_icon"
                className="md:w-[26.67px] w-[24px]"
              />
              <h6 className="md:text-[18px] text-[16px] font-circular font-medium  text-light-green">
                {list.title}
              </h6>
            </motion.div>
          ))}
        </div>

        <motion.div
          className=""
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Image
            src={Features4}
            alt="features_image"
            className="md:w-[390px] w-[344px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
