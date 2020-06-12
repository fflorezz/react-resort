import { useState } from "react";
import { gsap } from "gsap";

export const useSlider2Animation = ({
  rooms,
  sliderRef,
  imagesRef,
  cardsRef,
  sliderPositionX,
  slideRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = activeIndex === 0 ? rooms.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === rooms.length - 1 ? 0 : activeIndex + 1;
  let slideWidth;
  const duration = 0.9;
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

  const clickNext = () => {
    handleClick(true);
  };
  const clickPrev = () => {
    handleClick(false);
  };

  return { clickNext, clickPrev, activeIndex };
};

export const slidesAnimation = ({
  isNext,
  sliderRef,
  sliderPositionX,
  slideWidth,
  ease,
  duration,
  imagesRef,
  activeIndex,
  prevIndex,
  nextIndex,
  cardsRef,
}) => {
  gsap.to(sliderRef.current, {
    x: `${sliderPositionX.current + (isNext ? -slideWidth : +slideWidth)}px`,
    ease: ease,
    duration: duration,
  });
  gsap.to(imagesRef[activeIndex], {
    scale: 1.5,
    duration: duration,
    ease: ease,
  });
  gsap.to(imagesRef[isNext ? nextIndex : prevIndex], {
    scale: 1,
    duration: duration,
    ease: ease,
  });

  if (isNext) {
    gsap.from(cardsRef[nextIndex], {
      scale: 0.9,
      duration: duration,
      ease: ease,
    });
  } else {
    gsap.from(cardsRef[prevIndex], {
      x: "-50%",
      duration: duration - 0.1,
      ease: ease,
    });
  }
};
