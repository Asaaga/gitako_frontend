"use client";
import { useEffect, useState } from "react";
import { CarouselData } from "./CarouselData";
import React from "react";

function Carousel() {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === CarouselData.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? CarouselData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      {/* Carousel Container */}
      <div className="relative w-full h-[800px]">
        {/* Image Display */}
        {CarouselData.map((item, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-full object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <img
              src={item.src}
              alt=""
              className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <p className="text-white text-lg font-bold p-2 animate-fadeInUp flex gap-2 items-center bg-black">
                WELCOME TO{" "}
                <img height={100} width={100} src="/logo.jpeg" alt="Logo" />
              </p>
              <h1 className="md:text-7xl text-white sm:text-6xl  text-4xl px-5 lg:text-start text-center font-bold md:py-6 animate-fadeInUp">
                Your Farming Knowledge Hub.
              </h1>
              <div className="flex justify-center items-center animate-fadeInUp">
                <p className="md:text-5xl text-white sm:text-4xl text-xl font-bold py-4">
                  Connect, Learn, and Grow
                </p>
              </div>
              <p className="md:text-2xl text-xl font-bold text-white animate-fadeInUp px-5">
                Join our community to ask questions, share knowledge, and access
                resources for successful farming.
              </p>
              {/* Button */}
              <button className="bg-green-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black animate-fadeInUp">
                Explore Now
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Controls (On top of the image) */}
        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center space-x-4 z-20">
          {/* Left Arrow */}
          <button
            onClick={clickPrev}
            className="p-2 text-white bg-white bg-opacity-50 rounded-full hover:bg-opacity-75"
          >
            &#10094;
          </button>

          {/* Dots Navigation */}
          <div className="flex space-x-2">
            {CarouselData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === activeImage ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={clickNext}
            className="p-2 text-white bg-white bg-opacity-50 rounded-full hover:bg-opacity-75"
          >
            &#10095; {/* Right Arrow Icon */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
