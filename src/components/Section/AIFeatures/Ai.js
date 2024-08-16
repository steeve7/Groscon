import React from 'react'
import Image from 'next/image';
import Features5 from "../Assets/images/iphone.png";
import Features6 from "../Assets/images/features5.png";
import Features4 from "../Assets/images/Features6.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Ai() {
    const lists = [
        {
            icon: <IoIosCheckmarkCircleOutline />,
            title:"Reduce food waste"
        },
        {
            icon: <IoIosCheckmarkCircleOutline />,
            title:"Maintain financial discipline"
        },
        {
            icon: <IoIosCheckmarkCircleOutline />,
            title:"Achieve dietary goals"
        },
        {
            icon: <IoIosCheckmarkCircleOutline />,
            title:"Save time and effort"
        }
    ]
  return (
    <div className="flex flex-col justify-center w-full mt-10">
      <div
        className="flex md:flex-row flex-col justify-around items-center w-full pt-10 mt-10 md:px-16 px-7"
        style={{ background: "rgba(241, 141, 61, 1)" }}
      >
        <div className="flex flex-col justify-center lg:items-start items-center md:w-1/2 w-full gap-4">
          <h2 className="font-bold md:text-[25px] text-[20px] lg:w-[50%] md:w-full font-[Euclid Circular A] text-white">
            Do More with Our AI-powered Features
          </h2>
          <p className="w-full font-[Euclid Circular A] lg:w-[70%] md:w-full md:text-start text-center md:text-[15px] text-[12px] text-white">
            Chat with our AI assistant, discover healthier recipes and generate
            recipes using leftover groceries for a sustainable meal plan.
          </p>
        </div>
        <div className="lg:mt-0 mt-10">
          <Image
            src={Features5}
            alt="features_image"
            className="md:w-[312px] md:flex hidden"
          />
          <Image
            src={Features6}
            alt="features_image"
            className="md:w-[212px] md:hidden flex"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around items-center gap-6 md:px-16 px-7 bg-custom-gray py-20">
        <div className="flex flex-col text-left md:w-1/2 w-full gap-4">
          <h2 className="font-bold md:text-[20px] text-[15px] lg:w-[70%] md:w-full font-[Euclid Circular A] text-black">
            Your Path to Easier Grocery Management and Shopping
          </h2>
          {lists.map((list, i) => (
            <div key={i} className="flex flex-row items-center gap-2">
              <p className='font-bold text-orange-400'>{list.icon}</p>
              <h6 className='md:text-[15px] text-[10px]'>{list.title}</h6>
            </div>
          ))}
        </div>

        <div className="">
          <Image
            src={Features4}
            alt="features_image"
            className="md:w-[312px]"
          />
        </div>
      </div>
    </div>
  );
}
