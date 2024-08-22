'use client'
import React from "react";
import icon from "../Assets/images/service1.png";
import icon2 from "../Assets/images/servicee2.png";
import icon3 from "../Assets/images/service3.png";
import Subtitle from "@/components/Reuse/Subtitle";
import Image from "next/image";
import {motion} from 'framer-motion'

export default function Service() {
  const items = [
    {
      icons: icon,
      title: "Reduce Food Waste",
      desc: "Waste less, save more by receiving reminders before items expire and generating recipes using leftover groceries.",
    },
    {
      icons: icon2,
      title: "Save Time and Effort",
      desc: "Shop smarter, not harder by scanning grocery lists, generating recipes and creating shopping lists for a hassle-free experience.",
    },
    {
      icons: icon3,
      title: "Make Healthier Choices",
      desc: "Know what's in your food by scanning groceries to see their nutritional info and get dietary tips tailored to your preferences.",
    },
  ];
  return (
    <motion.div
      className="w-full py-[96px] bg-custom-gray"
      id="benefits"
     
    >
      <Subtitle
        title="We are Your Grocery Companion"
        desc="We simplify the process of managing groceries and help you make informed nutritional choices."
      />
      <div
        className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:px-0 px-5 mt-14"
        
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-6 w-full sm:w-1/2 md:w-1/3 lg:w-[357px] py-6 rounded-lg bg-custom-green"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Image
              src={item.icons}
              alt="icon_image"
              className="w-[72px] sm:w-[88px]"
              width={72} // Adjust width according to your requirements
              height={72} // Adjust height according to your requirements
            />
            <div className="w-full flex flex-col gap-4 px-5 md:px-0">
              <h3 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-circular text-dark-color text-center">
                {item.title}
              </h3>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-circular text-light-green font-normal text-center">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
