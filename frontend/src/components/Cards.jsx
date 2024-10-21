import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Chart Forum Card */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] rounded-full bg-white"
            src="/forum-icon.png"
            alt="Chart Forum"
          />
          <h2 className="text-2xl font-bold text-center py-8">Chart Forum</h2>
          <p className="text-center text-lg">
            Join our vibrant chart forum to ask questions and share insights
            with fellow farmers. Get expert answers and collaborate on solutions
            to enhance your farming practices.
          </p>
          <button className="bg-green-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get Started
          </button>
        </div>

        {/* Study Library Card */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src="/library.png"
            alt="Study Library"
          />
          <h2 className="text-2xl font-bold text-center py-8">Study Library</h2>
          <p className="text-center text-lg">
            Access a wealth of knowledge through our comprehensive study
            library. Explore videos, articles, and resources tailored to every
            aspect of farming.
          </p>
          <button className="text-green-700 bg-gray-800 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get Started
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto rounded-full mt-[-3rem] bg-white"
            src="/event-icon.png"
            alt="Programs and Events"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Programs and Events
          </h2>
          <p className="text-center text-lg">
            Participate in our programs and events designed to enhance your
            farming skills and community involvement. Stay updated on workshops,
            webinars, and field days!
          </p>
          <button className="bg-green-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
