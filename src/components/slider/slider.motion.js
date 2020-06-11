import { gsap } from "gsap";

export const sliderIn = (ref) => {
  gsap.to(ref.current, { opacity: 1, x: 0, duration: 1 });
};

export const sliderOut = (ref) => {
  gsap.to(ref.current, { opacity: 0, x: "-5%", duration: 1 });
};
