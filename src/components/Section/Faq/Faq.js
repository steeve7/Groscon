'use client'
import Subtitle from "@/components/Reuse/Subtitle";
import React, {useState} from "react";
import { IoMdRemoveCircleOutline, IoIosAddCircleOutline } from "react-icons/io";

export default function Faq() {
  // Array to keep track of which sections are open
  const [openSections, setOpenSections] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

const toggleSection = (index) => {
  setOpenSections((prevSections) =>
    prevSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
  );
};

 const reads = [
   {
     question: "How do I get started with Groscan?",
     answer:
       "To get started with Groscan, simply download the app from the App Store or Google Play Store. Once downloaded, you can sign up instantly using your Google or Apple account, or choose to continue as a guest.",
   },
   {
     question: "Is Groscan free to use?",
     answer:
       "Yes, Groscan is free to download and use. However, it also offers premium features for users who require additional functionality. You can explore these premium features within the app and choose the option that best suits your needs.",
   },
   {
     question: "Can I use Groscan to track my grocery expenses?",
     answer:
       "Yes, Groscan allows you to track your grocery expenses. You can easily monitor your spending, set budgets, and view reports to manage your finances more effectively.",
   },
   {
     question: "Does Groscan help with meal planning?",
     answer:
       "Yes, Groscan helps with meal planning. You can plan your meals, create shopping lists, and track your grocery expenses to make meal preparation more convenient.",
   },
   {
     question: "Is my data safe and secure with Groscan?",
     answer:
       "Yes, we take your privacy and security seriously. Groscan employs industry-standard encryption protocols to safeguard your data and ensures that your information is protected at all times.",
   },
   {
     question: "How can I contact customer support if I have an issue?",
     answer:
       "You can reach out to our support team via email, in-app chat, or through our website's support portal. We're here to help ensure your experience with Groscan is seamless and enjoyable.",
   },
 ];


  return (
    <div className=" w-full" id="faqs">
      <div>
        <Subtitle
          title="Frequently Asked Questions"
          desc="Everything you need to know about Groscan"
        />
      </div>
      <div className="mt-16 lg:px-24  px-10">
        {reads.map((read, index) => (
          <div
            key={index}
            className="flex flex-row gap-3 justify-between border-b-2 mb-5 "
          >
            <div className="flex flex-col flex-1 mb-5">
              <h2 className="font-medium text-[18px] font-circular text-dark-color">
                {read.question}
              </h2>
              {openSections[index] && (
                <p className="text-[16px] font-normal font-circular w-full mt-2 text-light-green">
                  {read.answer}
                </p>
              )}
            </div>
            <div
              onClick={() => toggleSection(index)}
              className="cursor-pointer"
            >
              {openSections[index] ? (
                <IoMdRemoveCircleOutline
                  size={20}
                  className="text-orange-600"
                />
              ) : (
                <IoIosAddCircleOutline
                  size={20}
                  className="text-lighter-green"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




