import React from "react";
import { Link } from "react-router-dom";

import Hero from "./../components/Hero";
import Banner from "./../components/Banner";

const HomePage = () => {
  return (
    <Hero>
      <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default HomePage;
