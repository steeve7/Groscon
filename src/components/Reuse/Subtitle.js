'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function Subtitle({title, desc}) {
  return (
    <motion.div
      className="flex flex-col justify-center text-center space-y-4 mt-12 w-full"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
      }}
    >
      <h2 className="md:text-[36px] text-[18px] font-semibold w-full font-circular">
        {title}
      </h2>
      <p
        className="md:text-[18px] text-[9px] font-normal font-[Euclid Circular A] w-full font-circular"
        style={{ color: "rgba(69, 69, 69, 1)" }}
      >
        {desc}
      </p>
    </motion.div>
  );
}
