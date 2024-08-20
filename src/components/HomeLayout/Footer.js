import React from 'react'
import Image from 'next/image';
import logo from '../HomeLayout/Assets/Images/Group.png'
import { FaApple, FaPlay } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import apple from "./Assets/Images/apple.png";
import andriod from "./Assets/Images/andriod.png";

export default function Footer() {
  return (
    <div className="w-full md:px-20 px-7 mt-36 bg-white py-8">
      <section className="flex md:flex-row flex-col justify-between w-full">
        <div className="md:w-[70%] w-full">
          <Link
            href="./"
            className="uppercase font-bold text-[15px] flex items-center justify-start gap-2 text-black font-circular"
          >
            <Image src={logo} alt="cartImage" />
            groscan
          </Link>
          <p className="text-black mt-6 text-[16px] w-full md:w-[70%] font-normal font-circular">
            Your Ai Assistant for simplifying grocery management and shopping
          </p>
          <div className="mt-8">
            <ul className="flex flex-row md:gap-6 gap-32 font-bold text-black md:text-[10px] lg:text-[14px] text-[15px]">
              <div className="flex md:flex-row flex-col gap-4 md:text-[16px] font-circular">
                <Link href="./">
                  <li>Benefits</li>
                </Link>
                <Link href="./">
                  <li>Feature</li>
                </Link>
                <Link href="./">
                  <li>FAQs</li>
                </Link>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-4 font-circular">
                <Link href="./">
                  <li>Contact</li>
                </Link>
                <Link href="./">
                  <li>Privacy Policy</li>
                </Link>
                <Link href="./">
                  <li>Terms of Use</li>
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="md:mt-0 mt-6">
          <h1 className="text-black font-bold sm:text-[15px] text-[10px] mb-2">
            Get the app
          </h1>
          <div className="gap-2 flex md:flex-col flex-row w-full">
            <Link
              href="./"
              className="p-4 font-circular w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-bold text-[14px]"
              style={{ background: "rgba(51, 101, 84, 1)" }}
            >
              <Image src={apple} alt="apple_image" />
              Get on iphone
            </Link>
            <Link
              href="./"
              className="p-4 font-circular w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-bold text-[14px]"
              style={{ background: "rgba(51, 101, 84, 1)" }}
            >
              <Image src={andriod} alt="andriod_image" />
              Get on Andriod
            </Link>
          </div>
        </div>
      </section>
      <section className="text-black mt-16">
        <div className="flex md:flex-row flex-col gap-4 justify-between">
          <div
            className="flex flex-row text-end gap-4 sm:text-[15px] text-[12px] md:order-2 order-1 font-circular"
            style={{ color: "rgba(148, 148, 148, 1)" }}
          >
            <Link href="./">
              <FaInstagram />
            </Link>
            <Link href="./">
              <FaFacebook />
            </Link>
            <Link href="./">
              <FaLinkedin />
            </Link>
            <Link href="./">
              <FaTwitter />
            </Link>
          </div>
          <p
            className="font-normal text-[16px] md:order-1 order-2 font-circular"
            style={{ color: "rgba(148, 148, 148, 1)" }}
          >
            @2024 Groscan. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
