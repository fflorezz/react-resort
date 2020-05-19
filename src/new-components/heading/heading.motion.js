import { gsap } from "gsap";

import styles from "./heading.module.scss";

export const headingAnimation = () => {
  const title = document.querySelectorAll(`.${styles.titleLine}`);

  gsap
    .timeline()
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3",
      delay: 0.3,
    })
    .to(
      `.${styles.headingText}`,
      {
        opacity: 1,
        x: 0,
        ease: "power1",
        duration: 0.7,
        onComplete: () => {
          console.log("finish in");
        },
      },
      "-=1"
    );
};

export const headingAnimationOut = () => {
  const title = document.querySelectorAll(`.${styles.titleLine}`);

  gsap.to(title, {
    opacity: 0,
    y: "100%",
    duration: 0.1,
    ease: "power3",
  });
  gsap.to(`.${styles.headingText}`, {
    opacity: 0,
    x: "20%",
    ease: "power1",
    duration: 0.1,
    onComplete: () => {
      console.log("finish out");
    },
  });
};
