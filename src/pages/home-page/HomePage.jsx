import React from "react";

import Hero from "./../../new-components/hero/Hero";
import Services from "./../../components/Services";
// import FeaturedRooms from "../../components/FeaturedRooms";
import ScrollToTop from "./../../components/ScrollToTop";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Services />
      {/* {  <FeaturedRooms />} */}
    </>
  );
};

export default HomePage;
