import React from "react";

import Hero from "./../../new-components/hero/Hero";
import ScrollToTop from "./../../components/ScrollToTop";
import Section from "../../new-components/section/Section";
import Heading from "./../../new-components/heading/Heading";
import Slider from "./../../new-components/slider/Slider";
import ImageAnimation from "./../../new-components/image-animation/ImageAnimation";
import SliderDestacadas from "./../../new-components/slider-destacadas/SliderDestacadas";

import { text } from "./../../text";
import imgMar from "../../images/mar/mar-01.jpg";

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
      <Section id="destacadas">
        <Heading text={text.headingDestacadas} />
        <SliderDestacadas />
      </Section>
    </>
  );
};

export default HomePage;
