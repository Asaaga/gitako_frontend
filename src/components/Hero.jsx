import React from "react";
import Carousel from "./Carousel/Carousel";

const Hero = () => {
  return (
    <div className="relative h-screen text-white">
      <div className="absolute inset-0 w-full h-full z-0">
        <Carousel />
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"></div>
      </div>

      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center relative z-10">
        <p className="text-[#00df9a] font-bold p-2 animate-fadeInUp">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 animate-fadeInUp">
          Grow with data.
        </h1>

        <div className="flex justify-center items-center animate-fadeInUp">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
        </div>

        <p className="md:text-2xl text-xl font-bold text-gray-500 animate-fadeInUp">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>

        {/* Button */}
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black animate-fadeInUp">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
