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
    <div className="w-full px-5 py-8 bg-custom-gray" id="benefits">
      <div className="text-center">
        <Subtitle
          title="We are Your Grocery Companion"
          desc="We simplify the process of managing groceries and help you make informed nutritional choices."
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-8 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex justify-center text-center items-center flex-col gap-4 w-full md:w-[357px] py-6 px-4 md:px-6 lg:h-[320px] md:h-[400px] rounded-lg bg-custom-green"
          >
            <Image
              src={item.icons}
              alt="icon_image"
              className="w-[64px] h-[64px] md:w-[88px] md:h-[88px]"
            />
            <h3 className="font-medium text-[16px] md:text-[24px] font-circular text-dark-green">
              {item.title}
            </h3>
            <p className="text-[12px] md:text-[18px] font-circular text-light-green">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
