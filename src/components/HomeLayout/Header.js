"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../HomeLayout/Assets/Images/logo.png";
import menuopen from '../HomeLayout/Assets/Images/menu-01.png'
import menuclose from '../HomeLayout/Assets/Images/x-close.png'

const menus = [
  { id: "#benefits", label: "BENEFITS" },
  { id: "#feature", label: "FEATURES" },
  { id: "#faqs", label: "FAQs" },
];

export default function Header() {
  const [menuSlide, setMenuSlide] = useState(false);
  const [navbar, setNavbar] = useState(false);


  const handleOpen = () => {
    setMenuSlide(!menuSlide);
  };


  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={`fixed w-full left-0 top-0 z-10 ${
        navbar ? "bg-custom-green shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between md:py-7 py-4 md:px-20 px-7">
        <a href="./" className="flex items-center justify-start gap-2 ">
          <Image src={logo} alt="cartImage" className="w-[148px]" />
        </a>
        <ul className="justify-around gap-6 items-center md:flex flex-row hidden font-medium text-[16px] text-dark-color font-circular">
          {menus.map((menu, i) => (
            <li key={i}>
              <a
                href={menu.id}
                activeclass="active"
                className="hover:text-light-yellow"
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>

        {/*  Mobile Button*/}
        <div className="block sm:hidden z-10" onClick={handleOpen}>
          {menuSlide ? (
            <Image src={menuclose} alt="menu-open" className="w-[32px] text-dark-color" />
          ) : (
            <Image src={menuopen} alt="menu-close" className="w-[32px] text-dark-color" />
          )}
        </div>
        {/*Mobile Menu*/}
        <div
          className={
            menuSlide
              ? "sm:hidden absolute top-14 left-0 right-0 bottom-0 w-full h-screen bg-custom-green text-center ease-in duration-700 text-black"
              : "sm:hidden absolute top-14 left-[-100%] right-0 bottom-0 w-full h-screen bg-custom-green text-center ease-in duration-700 text-black"
          }
        >
          <ul className="mt-8">
            {menus.map((menu, i) => (
              <li
                key={i}
                className="p-4 hover:text-gray-500 border-b-2 py-4 font-medium text-[18px] text-dark-color font-circular"
              >
                <a href={menu.id}>{menu.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
