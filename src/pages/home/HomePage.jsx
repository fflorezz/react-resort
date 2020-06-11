import React from "react";
import { motion } from "framer-motion";

import { useRoomsStateContext } from "../../context/roomsContex/RoomsContext";

import Hero from "./../../components/hero/Hero";
import Section from "../../components/section/Section";
import Heading from "./../../components/heading/Heading";
import Slider from "./../../components/slider/Slider";
import ImageAnimation from "./../../components/image-animation/ImageAnimation";
import Slider2 from "./../../components/slider-2/Slider2";
import Spinner from "./../../components/spinner/Spinner";

import { text } from "./../../text";
import imgMar from "../../images/mar/mar-01.jpg";

const HomePage = () => {
  const { featuredRooms, fetching } = useRoomsStateContext();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
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
        {fetching ? <Spinner /> : <Slider2 rooms={featuredRooms} />}
      </Section>
    </motion.div>
  );
};

export default HomePage;
