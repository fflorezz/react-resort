import { gsap } from "gsap";

export const imgIn = (ref) => {
  gsap.to(ref.current, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3",
    delay: 0.5,
  });
};

export const imgOut = (ref) => {
  gsap.to(ref.current, { opacity: 0, y: "20%", duration: 1 });
};
