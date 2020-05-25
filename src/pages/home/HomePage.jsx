import React, { useContext } from "react";

import { RoomContext } from "./../../context/room.context";

import Hero from "./../../new-components/hero/Hero";
import Section from "../../new-components/section/Section";
import Heading from "./../../new-components/heading/Heading";
import Slider from "./../../new-components/slider/Slider";
import ImageAnimation from "./../../new-components/image-animation/ImageAnimation";
import Slider2 from "./../../new-components/slider-2/Slider2";

import { text } from "./../../text";
import imgMar from "../../images/mar/mar-01.jpg";
import Loading from "./../../components/Loading";

const HomePage = () => {
  const { featuredRooms, loading } = useContext(RoomContext);

  return (
    <>
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
        {loading ? <Loading /> : <Slider2 rooms={featuredRooms} />}
      </Section>
    </>
  );
};

export default HomePage;
