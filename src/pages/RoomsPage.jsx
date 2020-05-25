import React from "react";
import { Link } from "react-router-dom";

import Hero from "./../components/Hero";
import Banner from "./../components/Banner";
import RoomsContainer from "./../components/RoomsContainer";
import ModalAnimation from "./../new-components/modal-animation/ModalAnimation";

const RoomsPage = () => {
  return (
    <ModalAnimation>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </ModalAnimation>
  );
};

export default RoomsPage;
