import React from 'react'

export default function Subtitle({title, desc}) {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-4 mt-12   ">
      <h2 className="text-[20px] font-bold">{title}</h2>
      <p
        className="text-[15px] font-normal font-[Euclid Circular A]"
        style={{ color: "rgba(69, 69, 69, 1)" }}
      >
        {desc}
      </p>
    </div>
  );
}
