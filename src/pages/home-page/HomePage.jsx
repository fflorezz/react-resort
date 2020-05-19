import React from "react";

import Hero from "./../../new-components/hero/Hero";
// import FeaturedRooms from "../../components/FeaturedRooms";
import ScrollToTop from "./../../components/ScrollToTop";
import BarSection from "../../new-components/bar-section/BarSection";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <BarSection />
      {/* {  <FeaturedRooms />} */}
    </>
  );
};

export default HomePage;
