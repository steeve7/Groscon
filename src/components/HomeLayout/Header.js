"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { motion } from "framer-motion";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../HomeLayout/Assets/Images/Group.png";

const menus = [
  { id: "#benefits", label: "Benefits" },
  { id: "#feature", label: "Feature" },
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
        <a
          href="./"
          className="uppercase font-medium md:text-[18px] text-[14px] flex items-center justify-start gap-2 text-black font-circular"
        >
          <Image src={logo} alt="cartImage" />
          groscan
        </a>
        <ul className="justify-around gap-6 items-center md:flex flex-row hidden font-medium text-[16px] text-black uppercase font-circular">
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
            <MdClose size={20} className="text-black" />
          ) : (
            <MdMenu size={20} className="text-black" />
          )}
        </div>
        {/*Mobile Menu*/}
        <div
            className={
              menuSlide
                ? "sm:hidden absolute top-10 left-0 right-0 bottom-0 w-full h-screen bg-custom-green text-center ease-in duration-700 text-black"
                : "sm:hidden absolute top-10 left-[-100%] right-0 bottom-0 w-full h-screen bg-custom-green text-center ease-in duration-700 text-black"
            }
        >
          <ul className="mt-8">
            {menus.map((menu, i) => (
              <li
                key={i}
                className="p-4 text-[18px] hover:text-gray-500 border-b-2 py-4 font-circular"
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
