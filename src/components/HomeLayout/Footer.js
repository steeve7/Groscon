import React from "react";
import Image from "next/image";
import logo from "../HomeLayout/Assets/Images/logo.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import apple from "./Assets/Images/apple.png";
import andriod from "./Assets/Images/android.png";

export default function Footer() {
  return (
    <div className="w-full md:px-20 px-7 mt-10 bg-white py-8">
      <section className="flex md:flex-row flex-col justify-between w-full">
        <div className="md:w-[70%] w-full">
          <Link href="./" className="flex items-center justify-start gap-2">
            <Image src={logo} alt="cartImage" className="w-[148px]" />
          </Link>
          <p className="text-black mt-6 text-[16px] w-full lg:w-[40%] md:w-[70%] font-normal font-circular text-light-green">
            Your AI Assistant for simplifying grocery management and shopping
          </p>
          <div className="mt-8">
            <ul className="flex flex-row md:gap-6 gap-32 font-medium text-dark-color md:text-[10px] lg:text-[16px] text-[15px]">
              <div className="flex md:flex-row flex-col gap-4 md:text-[16px] font-circular">
                <Link href="./" id="benefits">
                  <li>Benefits</li>
                </Link>
                <Link href="./" id="feature">
                  <li>Feature</li>
                </Link>
                <Link href="./" id="faqs">
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
          <h1 className="text-dark-color font-medium sm:text-[16px] text-[14px] mb-2">
            Get the app
          </h1>
          <div className="gap-2 flex md:flex-col flex-row w-full">
            <Link
              href="./"
              className="p-4 font-circular w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-semibold md:text-[16px] text-[12px] bg-dark-brown"
            >
              <Image
                src={apple}
                alt="apple_image"
                className="w-[18px] md:w-[21px]"
              />
              Get on iPhone
            </Link>
            <Link
              href="./"
              className="p-4 font-circular w-full rounded-[16px] text-white flex gap-2 items-center justify-center font-semibold md:text-[16px] text-[12px] bg-dark-brown"
            >
              <Image
                src={andriod}
                alt="andriod_image"
                className="w-[18px] md:w-[21px]"
              />
              Get on Android
            </Link>
          </div>
        </div>
      </section>
      <section className="text-black mt-16">
        <div className="flex md:flex-row flex-col gap-4 justify-between">
          <div className="flex flex-row text-end gap-4 sm:text-[24px] md:order-2 order-1 font-circular text-light-gray">
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
          <p className="font-normal text-[16px] md:order-1 order-2 font-circular text-light-gray">
            @2024 Groscan. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
