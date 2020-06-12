import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { images } from "./../../images/bar/imagesBar";

import styles from "./slider.module.scss";
import { useSliderAnimation } from "./slider.motion";
import { useDraggable } from "../../hooks/useDraggable";

const Slider = () => {
  const refs = {
    divCurrentRef: useRef(null),
    divCurrentRef2: useRef(null),
    imgCurrentRef: useRef(null),
    imgCurrentRef2: useRef(null),
    backgroundRef: useRef(null),
    backgroundRef2: useRef(null),
  };

  const {
    clickNext,
    clickPrev,
    current,
    background,
    background2,
    post,
  } = useSliderAnimation(images, refs);

  const dragabbleRef = useDraggable(clickNext, clickPrev);

  return (
    <div className={styles.slider}>
      <div ref={dragabbleRef} className={styles.proxy}></div>
      <div className={styles.sliderPrev} onClick={clickPrev}>
        <div className={styles.prevArrow}>
          <MdKeyboardArrowLeft />
        </div>
      </div>
      <div className={styles.sliderNext} onClick={clickNext}>
        <div className={styles.nextArrow}>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderLarge}>
          {/* image container large */}
          <div className={styles.imageContainer}>
            <div ref={refs.backgroundRef} className={styles.imageBackground}>
              <img src={images[background].img} alt="" />
            </div>
            <div ref={refs.divCurrentRef} className={styles.imageCurrent}>
              <img ref={refs.imgCurrentRef} src={images[current].img} alt="" />
            </div>
          </div>
          {/*  end image container large */}
        </div>
        <div className={styles.sliderSmall}>
          {/* image container small */}
          <div className={styles.imageContainer}>
            <div ref={refs.backgroundRef2} className={styles.imageBackground}>
              <img src={images[background2].img} alt="" />
            </div>
            <div ref={refs.divCurrentRef2} className={styles.imageCurrent}>
              <img ref={refs.imgCurrentRef2} src={images[post].img} alt="" />
            </div>
          </div>
          {/* end image container small */}
        </div>
      </div>
      <div className={styles.sliderCount}>
        <div className={styles.countLarge}>{current + 1}</div>
        <div className={styles.countSmall}>{images.length}</div>
      </div>
    </div>
  );
};

export default Slider;
