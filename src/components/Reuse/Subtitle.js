'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function Subtitle({title, desc}) {
  return (
    <div className="flex flex-col justify-center text-center w-full px-10 md:px-0">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="md:text-[48px] text-[24px] font-semibold w-full font-circular mb-3 text-dark-color"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.8,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 2,
        }}
        className="md:text-[18px] text-[16px] font-normal w-full font-circular text-light-green"
      >
        {desc}
      </motion.p>
    </div>
  );
}
