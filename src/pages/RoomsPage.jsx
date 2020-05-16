import React from "react";
import { Link } from "react-router-dom";

import Hero from "./../components/Hero";
import Banner from "./../components/Banner";
import RoomsContainer from "./../components/RoomsContainer";

const RoomsPage = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default RoomsPage;
