"use client"
import Subtitle from '@/components/Reuse/Subtitle'
import React from 'react'
import Feature from '../Assets/images/Features.png'
import Feature1 from '../Assets/images/Features2.png'
import Feature2 from '../Assets/images/Features3.png'
import Feature3 from '../Assets/images/Features4.png'
import Image from 'next/image'
import {motion} from 'framer-motion'


export default function Features() {

    return (
      <div className="md:px-16 px-7" id="feature">
        <div>
          <Subtitle
            title="Explore Our Features"
            desc="We have everything you need to simplify grocery shopping and manage groceries."
          />
        </div>
        <div className="flex flex-col justify-center w-full mt-10 gap-10">
          <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0">
            <motion.div
              className="flex flex-col text-left md:w-1/2 w-full"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <h2 className="font-bold md:text-[20px] text-[15px] font-[Euclid Circular A]">
                Grocery Management
              </h2>
              <p
                className="lg:w-[80%] md:w-full font-[Euclid Circular A] md:text-[15px] text-[12px]"
                style={{ color: "rgba(69, 69, 69, 1)" }}
              >
                Scan shopping receipts to extract grocery details. Create
                shopping lists for upcoming trips to the grocery store.
              </p>
            </motion.div>
            <motion.div
              className=""
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Image
                src={Feature}
                alt="features_image"
                className="md:w-[312px]"
              />
            </motion.div>
          </div>
          <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0">
            <motion.div
              className="flex flex-col text-left md:w-1/2 w-full md:order-2 order-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <h2 className="font-bold md:text-[20px] text-[15px] font-[Euclid Circular A]">
                Inventory Management
              </h2>
              <p
                className="lg:w-[80%] md:w-full font-[Euclid Circular A] md:text-[15px] text-[12px]"
                style={{ color: "rgba(69, 69, 69, 1)" }}
              >
                Create spaces within the app to organise where you store your
                groceries in real life. Get timely reminders when items are
                nearing their expiry date. Receive reminders to update item
                quantities based on usage patterns.
              </p>
            </motion.div>
            <motion.div
              className="md:order-1 order-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Image
                src={Feature3}
                alt="features_image"
                className="md:w-[312px]"
              />
            </motion.div>
          </div>
          <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0">
            <motion.div
              className="flex flex-col text-left md:w-1/2 w-full"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <h2 className="font-bold md:text-[20px] text-[15px] font-[Euclid Circular A]">
                Expense Tracking
              </h2>
              <p
                className="lg:w-[80%] md:w-full font-[Euclid Circular A] md:text-[15px] text-[12px]"
                style={{ color: "rgba(69, 69, 69, 1)" }}
              >
                Monitor your grocery spending with weekly, monthly, and yearly
                reports. Set monthly budgets and track your spending to stay
                within your budget.
              </p>
            </motion.div>
            <motion.div
              className=""
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Image
                src={Feature2}
                alt="features_image"
                className="md:w-[312px]"
              />
            </motion.div>
          </div>
          <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0">
            <motion.div
              className="flex flex-col text-left md:w-1/2 w-full md:order-2 order-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <h2 className="font-bold md:text-[20px] text-[15px] font-[Euclid Circular A]">
                Nutritional Information
              </h2>
              <p
                className="lg:w-[80%] md:w-full font-[Euclid Circular A] md:text-[15px] text-[12px]"
                style={{ color: "rgba(69, 69, 69, 1)" }}
              >
                Scan items to view their nutritional information and suitability
                based on dietary preferences.
              </p>
            </motion.div>
            <motion.div
              className="md:order-1 order-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Image
                src={Feature3}
                alt="features_image"
                className="md:w-[312px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    );
}
