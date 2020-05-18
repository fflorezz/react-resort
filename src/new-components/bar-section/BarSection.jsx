import React from "react";

import styles from "./barSection.module.scss";
import Heading from "./../heading/Heading";
import Slider from "./../slider/Slider";

const BarSection = () => {
  return (
    <section id="bar" className={styles.bar}>
      <Heading />
      <Slider />
    </section>
  );
};

export default BarSection;
