import React, { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import TextCard from "../text-card/TextCard";

import styles from "./slider2.module.scss";
import { slidesAnimation } from "./slider2.motion";

const Slider2 = ({ rooms }) => {
  // slides transition
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = activeIndex === 0 ? rooms.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === rooms.length - 1 ? 0 : activeIndex + 1;
  const imagesRef = [];
  const cardsRef = [];
  const sliderPositionX = useRef(0);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);
  let slideWidth;
  const duration = 1.2;
  const ease = "easeIn";

  function handleClick(isNext) {
    slideWidth = slideRef.current.offsetWidth;

    if (
      (isNext && activeIndex === rooms.length - 1) ||
      (!isNext && activeIndex === 0)
    ) {
      return;
    }

    slidesAnimation({
      isNext,
      sliderRef,
      slideRef,
      sliderPositionX,
      slideWidth,
      ease,
      duration,
      imagesRef,
      activeIndex,
      prevIndex,
      nextIndex,
      cardsRef,
    });

    sliderPositionX.current =
      sliderPositionX.current + (isNext ? -slideWidth : +slideWidth);

    setActiveIndex(activeIndex + (isNext ? 1 : -1));
  }

  return (
    <>
      <div className={styles.container}>
        <div ref={sliderRef} className={styles.slider}>
          {rooms.map((room, idx) => (
            <div ref={slideRef} key={room.id} className={styles.slide}>
              <div className={styles.image}>
                <img src={room.images[0]} ref={(el) => (imagesRef[idx] = el)} />
              </div>
              <TextCard
                title={room.name}
                description={room.description}
                slug={`/rooms/${room.slug}`}
                refCallback={(el) => (cardsRef[idx] = el)}
              />
            </div>
          ))}
        </div>
        <div onClick={() => handleClick(false)} className={styles.prevArrow}>
          <MdKeyboardArrowLeft />
        </div>
        <div onClick={() => handleClick(true)} className={styles.nextArrow}>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className={styles.sliderCount}>
        <div className={styles.countLarge}>{activeIndex + 1}</div>
        <div className={styles.countSmall}>{rooms.length}</div>
      </div>
    </>
  );
};

export default Slider2;
