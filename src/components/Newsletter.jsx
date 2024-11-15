import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 bg-gray-800">
      {" "}
      {/* Added background for better visibility */}
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl text-gray-300 sm:text-3xl text-2xl font-bold py-2">
            Want expert insights and farming tips delivered to your inbox?
          </h1>
          <p className="text-base text-gray-300">
            Sign up for our newsletter to receive the latest updates, farming
            strategies, and exclusive content from our experts.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <button className="bg-green-700 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p className="text-base text-gray-300">
            We care about your privacy. Your data will be protected. Read our{" "}
            <span className="text-green-700 text-base font-normal">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
