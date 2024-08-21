'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function Subtitle({title, desc}) {
  return (
    <div
      className="flex flex-col justify-center text-center w-full px-10 md:px-0"
     
    >
      <h2 className="md:text-[48px] text-[24px] font-semibold w-full font-circular mb-3 text-dark-color">
        {title}
      </h2>
      <p
        className="md:text-[18px] text-[16px] font-normal w-full font-circular text-light-green"
      >
        {desc}
      </p>
    </div>
  );
}
