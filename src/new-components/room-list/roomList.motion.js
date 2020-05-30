import { gsap } from "gsap";

export const cardsAnimation = (cardsRef) => {
  gsap.from(cardsRef, {
    opacity: 0,
    y: "20%",
    stagger: 0.5,
    ease: "power1.in",
  });
};
export const cardsAnimationOut = (cardsRef) => {
  gsap.set(cardsRef, { opacity: 1, y: 0 });
};
