import { gsap } from "gsap";

export const heroAnimation = (ref) => {
  gsap.from(ref.current, {
    opacity: 0,
    x: "10%",
    duration: 1,
    ease: "power2",
    delay: 0.6,
  });
};
