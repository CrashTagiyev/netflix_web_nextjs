"use client";
import { useState } from "react";
import accordionPlus from "@assets/PNGs/accordionPlus.png";
import Image from "next/image";
const LandingAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-[17px]">
      {items.map((item, index) => (
        <div key={index} className="mb-1 rounded-lg">
          <button onClick={() => toggleItem(index)} className="w-full"> 
            <div className="cursor-pointer flex items-center justify-between bg-[#2D2D2D] transition-all duration-300 hover:bg-[#3d3d3d] h-[54px] px-[24px] font-bold">
              <p className="font-roboto font-normal text-[24px] leading-[28.13px]">
                {item.title}
              </p>
              <Image
                src={accordionPlus}
                alt="accordion_Plus"
                height={40}
                className={`h-[40px] transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-1 duration-300 ${
              activeIndex === index
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-2 bg-[#2D2D2D]">
              {item.content.split("[break]").map((paragraph, idx) => (
                <p
                  key={idx}
                  className="mb-2 p-4 font-roboto font-normal text-[24px] leading-[28.13px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingAccordion;
