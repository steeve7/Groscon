'use client'
import React from "react";
import icon from "../Assets/images/Icon.png";
import icon2 from "../Assets/images/Icon (1).png";
import icon3 from "../Assets/images/Icon (2).png";
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
    <div className="w-full md:px-5 px-7 py-8 bg-custom-gray" id="benefits">
      <div>
        <Subtitle
          title="We are Your Grocery Companion"
          desc="We simplify the process of managing groceries and help you make informed nutritional choices."
        />
      </div>
      <motion.div
        className="w-full flex md:flex-row flex-col justify-center items-center mt-8 gap-6"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex justify-center text-center items-center flex-col gap-4 md:w-[27%] w-full md:h-[400px] lg:h-[230px] py-10 px-10 mx-2 rounded-lg"
            style={{ background: "rgba(230, 247, 230, 1)" }}
          >
            <Image
              src={item.icons}
              alt="icon_image"
              className="lg:w-[20%] md:w-[40%]"
            />
            <h3 className="font-semibold md:text-[12px] text-[10px] font-[Euclid Circular A]">
              {item.title}
            </h3>
            <p
              className="md:text-[14px] text-[10px] font-[Euclid Circular A]"
              style={{ color: "rgba(69, 69, 69, 1)" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
