import Subtitle from "@/components/Reuse/Subtitle";
import React from "react";
import Feature from "../Assets/images/feature1.png";
import Feature1 from "../Assets/images/feature2.png";
import Feature2 from "../Assets/images/feature3.png";
import Feature3 from "../Assets/images/feature4.png";
import Image from "next/image";

export default function Features() {
  return (
    <div className="w-full py-[60px]" id="feature">
        <Subtitle
          title="Explore Our Features"
          desc="We have everything you need to simplify grocery shopping and manage groceries."
        />
      <div className="flex flex-col justify-center w-full mt-10 gap-10 md:px-3 px-7">
        <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0">
          <div className="flex flex-col text-left md:w-[40%] w-full">
            <h2 className="font-medium md:text-[36px] text-[18px] font-circular text-dark-color">
              Grocery Management
            </h2>
            <p className="lg:w-full md:w-full font-circular md:text-[18px] text-[14px] font-normal text-light-green">
              Scan shopping receipts to extract grocery details. Create shopping
              lists for upcoming trips to the grocery store.
            </p>
          </div>
          <div className="">
            <Image
              src={Feature}
              alt="features_image"
              className="md:w-[390px] w-[343px]"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0">
          <div className="flex flex-col text-left md:w-[40%] w-full md:order-2 order-1">
            <h2 className="font-medium md:text-[36px] text-[18px] font-circular text-dark-color">
              Inventory Management
            </h2>
            <p className="w-full font-circular md:text-[18px] text-[14px] font-normal text-light-green">
              Create spaces within the app to organise where you store your
              groceries in real life. Get timely reminders when items are
              nearing their expiry date. Receive reminders to update item
              quantities based on usage patterns.
            </p>
          </div>
          <div className="md:order-1 order-2">
            <Image
              src={Feature3}
              alt="features_image"
              className="md:w-[390px] w-[343px]"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0">
          <div className="flex flex-col text-left md:w-[40%] w-full">
            <h2 className="font-medium md:text-[36px] text-[18px] font-circular text-dark-color">
              Expense Tracking
            </h2>
            <p className="w-full font-circular md:text-[18px] text-[14px] font-normal text-light-green">
              Monitor your grocery spending with weekly, monthly, and yearly
              reports. Set monthly budgets and track your spending to stay
              within your budget.
            </p>
          </div>
          <div className="">
            <Image
              src={Feature2}
              alt="features_image"
              className="md:w-[390px] w-[343px]"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around items-center gap-4 md:gap-0">
          <div className="flex flex-col text-left md:w-[40%] w-full md:order-2 order-1">
            <h2 className="font-medium md:text-[36px] text-[18px] font-circular text-dark-color">
              Nutritional Information
            </h2>
            <p className="w-full font-circular md:text-[18px] text-[14px] font-normal text-light-green">
              Scan items to view their nutritional information and suitability
              based on dietary preferences.
            </p>
          </div>
          <div className="md:order-1 order-2">
            <Image
              src={Feature3}
              alt="features_image"
              className="md:w-[390px] w-[343px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
