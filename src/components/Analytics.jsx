import React from "react";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* Image Container with Fixed Height */}
        <div className="flex items-center">
          <img
            className="lg:w-[500px] w-full h-full object-cover mx-auto my-4" // Ensure the image covers the height
            src="/online-library.jpg"
            alt="Online Library"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center h-full">
          {" "}
          {/* Ensure this takes the full height */}
          <p className="text-green-700 font-bold">EXPLORE OUR ONLINE LIBRARY</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            A Wealth of Farming Knowledge at Your Fingertips
          </h1>
          <p className="text-lg">
            Our online library is a comprehensive resource designed to empower
            farmers and enthusiasts with the knowledge they need to succeed.
            Featuring a wide array of educational materials, including detailed
            articles, insightful videos, and practical guides, users can easily
            access information tailored to various aspects of farming systems.
          </p>
          <p className="text-lg">
            Whether you're a beginner looking to learn the basics or an
            experienced farmer seeking advanced techniques, our library is your
            go-to place for reliable and up-to-date farming resources. Engage
            with content created by experts in the field, and stay informed
            about the latest trends and practices in agriculture.
          </p>
          <p>
            Join our community today and make the most of our online library to
            enhance your farming practices and achieve your agricultural goals.
          </p>
          <button className="bg-gray-800 text-green-700 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Explore Library
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
