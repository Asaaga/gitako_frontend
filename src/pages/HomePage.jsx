import React from "react";

import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";

import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
};

export default HomePage;
