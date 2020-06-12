import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";

import TextCard from "../text-card/TextCard";

import styles from "./slider2.module.scss";
import { useSlider2Animation } from "./slider2.motion";
import { useDraggable } from "../../hooks/useDraggable";

const Slider2 = ({ rooms }) => {
  const imagesRef = [];
  const cardsRef = [];
  const sliderPositionX = useRef(0);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  const { clickNext, clickPrev, activeIndex } = useSlider2Animation({
    imagesRef,
    cardsRef,
    sliderPositionX,
    sliderRef,
    slideRef,
    rooms,
  });

  const dragabbleRef = useDraggable(clickNext, clickPrev);

  return (
    <>
      <div className={styles.container}>
        <div ref={sliderRef} className={styles.slider}>
          <div ref={dragabbleRef} className={styles.proxy}></div>
          {rooms.map((room, idx) => (
            <div ref={slideRef} key={room.id} className={styles.slide}>
              <div className={styles.image}>
                <img
                  src={room.images[0]}
                  ref={(el) => (imagesRef[idx] = el)}
                  alt=""
                />
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
        <div onClick={clickPrev} className={styles.prevArrow}>
          <MdKeyboardArrowLeft />
        </div>
        <div onClick={clickNext} className={styles.nextArrow}>
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

Slider2.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object),
};

export default Slider2;
