import React from "react";

import styles from "./hero.module.scss";
import heroImage from "../../images/hero-web.jpg";
import logo from "../../images/logo_transparent_white.png";

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <img className={styles.heroImage} src={heroImage} alt="resort-hotel" />
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.heroText}>
        <h1>El espíritu cosmopolita</h1>
        <p>
          El concepto y el servicio de los mejores hoteles de lujo en nuestras
          espaciosas y sofisticadas habitaciones.
        </p>
      </div>
    </div>
  );
};

export default Hero;
