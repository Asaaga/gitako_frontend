import React from "react";
import TeamCarousel from "../components/TeamCarousel";

const AboutUs = () => {
  return (
    <section>
      <div className="py-12 mt-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mt-5 text-3xl mb-4 bg-gradient-to-r lg:w-[300px] text-center from-green-300 to-green-800 text-white px-4 py-2 rounded-lg w-full md:mx-auto font-semibold tracking-widest uppercase title-font shadow-md">
              Why choose Gitako?
            </h2>
            <p className="font-heading mt-2 text-center text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Empowering farmers with knowledge and community.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              Gitako is your go-to platform for learning about farming systems.
              Connect with experts, access valuable resources, and enhance your
              farming practices.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="/forum-icon.png"
                      alt="Interactive Community Forum"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Interactive Community Forum
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Join our chart forum to ask questions and get answers from
                  fellow farmers and experts about best practices and
                  techniques.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="/library.png" alt="Rich Learning Resources" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Rich Learning Resources
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Access a library filled with videos and other educational
                  content uploaded by our admin to enhance your farming
                  knowledge.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/511771/dashboard-671.svg"
                      alt="Comprehensive Library"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Comprehensive Library
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Study various sections of farming systems through our
                  extensive library, designed for users to learn at their own
                  pace.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/76267/free-commercial-label.svg"
                      alt="User-Friendly Interface"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    User-Friendly Interface
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Navigate Gitako effortlessly and access all features
                  seamlessly, making learning about farming enjoyable.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <TeamCarousel />
    </section>
  );
};

export default AboutUs;
