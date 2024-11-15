import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const teamMembers = [
  {
    name: "Member One",
    position: "Position One",
    image: "/images.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Member Two",
    position: "Position Two",
    image: "/m2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Member Three",
    position: "Position Three",
    image: "/m3.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Member Four",
    position: "Position Four",
    image: "/m4.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Member Five",
    position: "Position Five",
    image: "/m5.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TeamCarousel = () => {
  return (
    <section className="bg-brand-500 py-10">
      <h1 className="font-bold text-center text-black lg:text-5xl text-3xl mb-8">
        Meet Our Team
      </h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="h-[450px] mx-3 bg-white rounded-lg shadow-lg flex flex-col"
          >
            {/* Upper part with <img> for the team member image */}
            <div className="h-[300px] overflow-hidden rounded-tr-2xl rounded-bl-2xl relative">
              <img
                src={member.image}
                alt={`team`}
                className="w-full h-full object-cover transform scale-110" // Zooms in slightly with scale
              />
            </div>

            {/* Lower part with info */}
            <div className="flex flex-col justify-center p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-600">
                {member.position}
              </h3>
              <h2 className="text-2xl font-bold font-[Volkhov] text-brand-500 mt-2">
                {member.name}
              </h2>
              <p className="mt-3 text-sm text-gray-500">{member.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default TeamCarousel;
