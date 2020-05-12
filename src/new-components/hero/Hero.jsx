import React from "react";

import styles from "./hero.module.scss";
import heroImage from "../../images/hero-web.jpg";
import logo from "../../images/logo_transparent_white.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src={heroImage} alt="resort-hotel" />
      <div className={styles.heroText}>
        <img className={styles.logo} src={logo} alt="" />
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
