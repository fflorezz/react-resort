import React from "react";
import { Link } from "react-router-dom";

import Hero from "./../components/Hero";
import Banner from "./../components/Banner";

const SingleRoom = ({ room }) => {
  const { images, name } = room;
  return (
    <>
      <Hero hero="roomsHero" imgUrl={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </Hero>
      <section className="single-room"></section>
    </>
  );
};

export default SingleRoom;
