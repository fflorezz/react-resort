import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Hero from "./../../new-components/hero/Hero";
import Banner from "./../../components/Banner";
import Services from "./../../components/Services";
import FeaturedRooms from "../../components/FeaturedRooms";
import ScrollToTop from "./../../components/ScrollToTop";

import styles from "./homePage.module.scss";
import Mask from "./../../new-components/mask/Mask";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Mask />
      <Hero />
      <Services />
      {/* {  <FeaturedRooms />} */}
    </>
  );
};

export default HomePage;
