"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

function ContentModal({ content, setModalIsOpen }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    console.log(content);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setModalIsOpen(false), 200);
  };

  return (
    <div  className=" fixed inset-0 flex justify-center items-center z-[9999]">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-200 ${
            isVisible ? "opacity-70" : "opacity-0"
          }`}
          onClick={handleClose}
        ></div>
        <div
          className={`relative w-[800px] max-w-full bg-black rounded-lg overflow-hidden text-white transform transition-all duration-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button
            onClick={handleClose}
            className="z-[10000] absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>

          <div className="relative w-full h-[500px]">
            <Image
              src={`https://image.tmdb.org/t/p/original${content.backdrop_path}`}
              alt={content.title}
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
            <div className="flex items-center space-x-3 text-sm text-gray-300 mb-4">
              <span>{content.media_type}</span>
              <span>|</span>
              <span>{content.adult ? `18+` : `12+`}</span>
            </div>

            <p className="text-gray-300 mb-6">{content.description}</p>

            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
    </div>
  );
}

export default ContentModal;
