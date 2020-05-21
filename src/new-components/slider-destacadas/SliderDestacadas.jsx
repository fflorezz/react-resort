import React, { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { gsap } from "gsap";

import styles from "./sliderDestacadas.module.scss";
import TextCard from "../text-card/TextCard";
import { images } from "../../images/bar/imagesBar.js";

const SliderDestacadas = () => {
  // slide transition
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  const imagesRef = [];
  const cardsRef = [];
  const sliderPositionX = useRef(0);
  const sliderRef = useRef(null);
  const slideWidth = 75;
  const duration = 1;

  function handleClick(isNext) {
    if (
      (isNext && activeIndex === images.length - 1) ||
      (!isNext && activeIndex === 0)
    ) {
      return;
    }

    gsap.to(sliderRef.current, {
      x: `${sliderPositionX.current + (isNext ? -slideWidth : +slideWidth)}vw`,
      ease: "power1.in",
      duration: duration,
    });
    gsap.to(imagesRef[activeIndex], {
      scale: 1.5,
      duration: duration,
      ease: "power1.in",
    });
    gsap.to(imagesRef[isNext ? nextIndex : prevIndex], {
      scale: 1,
      duration: duration,
      ease: "power1.in",
    });

    if (isNext) {
      gsap.from(cardsRef[nextIndex], {
        scale: 0.8,
        duration: duration,
        ease: "power1.in",
      });
    } else {
      gsap.from(cardsRef[prevIndex], {
        x: "-50%",
        duration: duration - 0.1,
        ease: "power1.in",
      });
    }

    sliderPositionX.current =
      sliderPositionX.current + (isNext ? -slideWidth : +slideWidth);

    setActiveIndex(activeIndex + (isNext ? 1 : -1));
  }

  return (
    <div className={styles.container}>
      <div ref={sliderRef} className={styles.slider}>
        {images.map((img, idx) => (
          <div key={idx} className={styles.slide}>
            <div className={styles.image}>
              <img src={img.img} ref={(el) => (imagesRef[idx] = el)} />
            </div>
            <TextCard refCallback={(el) => (cardsRef[idx] = el)} />
          </div>
        ))}
      </div>
      <div className={styles.sliderCount}>
        <div className={styles.countLarge}>{activeIndex + 1}</div>
        <div className={styles.countSmall}>{images.length}</div>
      </div>
      <div onClick={() => handleClick(false)} className={styles.prevArrow}>
        <MdKeyboardArrowLeft />
      </div>
      <div onClick={() => handleClick(true)} className={styles.nextArrow}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default SliderDestacadas;
