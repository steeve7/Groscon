import React from "react";
import Image from "next/image";
import Features5 from "../Assets/images/iphone.png";
import Features6 from "../Assets/images/features5.png";
import Features4 from "../Assets/images/Features6.png";
import check from '../Assets/images/icon-check.png'

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
    <div className="flex flex-col justify-center w-full mt-10">
      <div
        className="flex md:flex-row flex-col justify-around items-center w-full pt-10 mt-10 px-7"
        style={{ background: "rgba(241, 141, 61, 1)" }}
      >
        <div className="flex flex-col justify-center lg:items-start items-center md:w-1/2 w-full gap-4">
          <h2 className="font-semibold lg:text-[48px] md:text-[30px] text-[24px] w-full font-circular text-white">
            Do More with Our AI-powered Features
          </h2>
          <p className="w-full font-circular text-start md:text-[18px] text-[16px] text-white">
            Chat with our AI assistant, discover healthier recipes and generate
            recipes using leftover groceries for a sustainable meal plan.
          </p>
        </div>
        <div className="lg:mt-0 mt-10">
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
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around items-center gap-6 bg-custom-gray py-20 px-7">
        <div className="flex flex-col text-left md:w-1/2 w-full gap-4">
          <h2 className="font-medium lg:text-[48px] md:text-[30px] text-[24px] w-full font-circular text-black">
            Your Path to Easier Grocery Management and Shopping
          </h2>
          {lists.map((list, i) => (
            <div key={i} className="flex flex-row items-center gap-2">
              <Image src={list.icon} alt="check_icon"/>
              <h6 className="font-normal md:text-[18px] text-[16px] font-circular">
                {list.title}
              </h6>
            </div>
          ))}
        </div>

        <div className="">
          <Image
            src={Features4}
            alt="features_image"
            className="md:w-[360px] w-[343px]"
          />
        </div>
      </div>
    </div>
  );
}
