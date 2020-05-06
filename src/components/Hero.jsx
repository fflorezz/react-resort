import React from "react";

const Hero = ({ children, hero, imgUrl }) => {
  return (
    <header
      className={hero}
      style={imgUrl ? { backgroundImage: `url(${imgUrl})` } : {}}
    >
      {children}
    </header>
  );
};

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
