import { gsap } from "gsap";

export const headingAnimation = (ref) => {
  gsap
    .timeline()
    .to([ref.line1.current, ref.line2.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3",
      delay: 0.3,
    })
    .to(
      ref.text.current,
      {
        opacity: 1,
        x: 0,
        ease: "power1",
        duration: 0.7,
      },
      "-=1"
    );
};

export const headingAnimationOut = (ref) => {
  gsap.to([ref.line1.current, ref.line2.current], {
    opacity: 0,
    y: "100%",
    duration: 0.1,
    ease: "power3",
  });
  gsap.to(ref.text.current, {
    opacity: 0,
    x: "20%",
    ease: "power1",
    duration: 0.1,
  });
};
