import React from "react";
import { Link } from "react-router-dom";

import Hero from "./../../new-components/hero/Hero";
import Banner from "./../../components/Banner";
import Services from "./../../components/Services";
import FeaturedRooms from "../../components/FeaturedRooms";
import ScrollToTop from "./../../components/ScrollToTop";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default HomePage;
