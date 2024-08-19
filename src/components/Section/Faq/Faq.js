import Subtitle from "@/components/Reuse/Subtitle";
import React from "react";
import { IoMdRemoveCircleOutline, IoIosAddCircleOutline } from "react-icons/io";

export default function Faq() {
  const reads = [
    {
      title: "How do I get started with Groscan?",
      desc: "To get started with Groscan, simply download the app from the App Store or Google Play Store. Once downloaded, you can sign up instantly using your Google or Apple account, or choose to continue as a guest.",
      icon: <IoMdRemoveCircleOutline />,
    },
    {
      title: "Is Groscan free to use?",
      icon: <IoIosAddCircleOutline />,
    },
    {
      title: "Can I use Groscan to track my grocery expenses?",
      icon: <IoIosAddCircleOutline />,
    },
    {
      title: "Does Groscan help with meal planning?",
      icon: <IoIosAddCircleOutline />,
    },
    {
      title: "Is my data safe and secure with Groscan?",
      icon: <IoIosAddCircleOutline />,
    },
    {
      title: "How can I contact customer support if I have an issue?",
      icon: <IoIosAddCircleOutline />,
    },
  ];
  return (
    <div className=" w-full lg:px-24 md:px-[3rem]" id="faqs">
      <div>
        <Subtitle
          title="Frequently Asked Questions"
          desc="Everything you need to know about Groscan"
        />
      </div>
      <div className="flex flex-col justify-center gap-8 w-full md:px-0 px-7">
        {reads.map((read, i) => (
          <div
            key={i}
            className="flex flex-row gap-3 items-center justify-between border-b-2 py-3"
          >
            <div className="flex flex-col">
              <h2 className="font-medium text-[18px] font-circular">
                {read.title}
              </h2>
              <p
                className=" text-[14px] font-normal font-circular w-full"
                style={{ color: "rgba(69, 69, 69, 1)" }}
              >
                {read.desc}
              </p>
            </div>
            <p className="text-orange-600">{read.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
