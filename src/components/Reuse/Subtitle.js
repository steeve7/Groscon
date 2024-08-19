'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function Subtitle({title, desc}) {
  return (
    <div
      className="flex flex-col justify-center text-center space-y-4 mt-12 w-full"
     
    >
      <h2 className="md:text-[36px] text-[18px] font-semibold w-full font-circular">
        {title}
      </h2>
      <p
        className="md:text-[18px] text-[16px] font-normal font-[Euclid Circular A] w-full font-circular"
        style={{ color: "rgba(69, 69, 69, 1)" }}
      >
        {desc}
      </p>
    </div>
  );
}
