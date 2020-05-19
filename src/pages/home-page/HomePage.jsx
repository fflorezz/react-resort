import React from "react";

import Hero from "./../../new-components/hero/Hero";
// import FeaturedRooms from "../../components/FeaturedRooms";
import ScrollToTop from "./../../components/ScrollToTop";
import Section from "../../new-components/section/Section";
import Heading from "./../../new-components/heading/Heading";
import Slider from "./../../new-components/slider/Slider";

import { text } from "./../../text";
import imgMar from "../../images/mar/mar-01.jpg";

import styles from "./homePage.module.scss";
import ImageAnimation from "./../../new-components/image-animation/ImageAnimation";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Section id="bar">
        <Heading text={text.headingBar} />
        <Slider />
      </Section>
      <Section id="mar" row={true}>
        <Heading text={text.headingMar} />
        <ImageAnimation width="100%" src={imgMar} />
      </Section>

      {/* {  <FeaturedRooms />} */}
    </>
  );
};

export default HomePage;
