import { useState } from "react";

import { gsap } from "gsap";

export const useSliderAnimation = (images, refs) => {
  const [current, setCurrent] = useState(0);
  const [background, setBackground] = useState(0);
  const [background2, setBackground2] = useState(0);
  const [animating, setAnimating] = useState(false);
  const prev = current === 0 ? images.length - 1 : current - 1;
  const post = current === images.length - 1 ? 0 : current + 1;

  function onClickHandler(isNext) {
    if (animating) {
      return;
    } else {
      setAnimating(true);
      setBackground(current);
      setBackground2(post);
      setCurrent(isNext ? post : prev);
      sliderAnimation(refs, setAnimating, isNext);
    }
  }

  const clickNext = () => {
    onClickHandler(true);
  };
  const clickPrev = () => {
    onClickHandler(false);
  };

  return { clickNext, clickPrev, current, background, background2, post };
};

export const sliderAnimation = (refs, setAnimating, isNext) => {
  const {
    backgroundRef,
    backgroundRef2,
    divCurrentRef,
    divCurrentRef2,
    imgCurrentRef,
    imgCurrentRef2,
  } = refs;

  const duration = 0.6;
  const ease = "power1.in";

  gsap.to([backgroundRef.current, backgroundRef2.current], {
    left: isNext ? "-100%" : "100%",
    duration: duration,
    ease: ease,
  });
  gsap.from([divCurrentRef.current, divCurrentRef2.current], {
    scale: 1,
    left: isNext ? "100%" : "-100%",
    duration: duration,
    ease: ease,
  });
  gsap.from([imgCurrentRef.current, imgCurrentRef2.current], {
    scale: 1.6,
    duration: duration,
    ease: ease,
  });
  gsap.to([backgroundRef.current, backgroundRef2.current], {
    left: 0,
    delay: duration,
    duration: 0,
    onComplete: () => setAnimating(false),
  });
};
