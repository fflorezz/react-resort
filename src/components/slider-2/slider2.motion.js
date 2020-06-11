import { gsap } from "gsap";

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
