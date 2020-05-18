import React from "react";

import styles from "./slider.module.scss";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderPrev}></div>
      <div className={styles.sliderNext}></div>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderLarge}></div>
        <div className={styles.sliderSmall}></div>
      </div>
      <div className={styles.sliderCount}>
        <div className={styles.countSmall}></div>
        <div className={styles.countLarge}></div>
      </div>
    </div>
  );
};

export default Slider;
