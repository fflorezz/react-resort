import { gsap } from "gsap";

import styles from "./mask.module.scss";

export const maskAnimation = () => {
  gsap
    .timeline()
    .from(`.${styles.logo}`, {
      opacity: 0,
      duration: 2,
      rotate: -190,
      ease: "power3",
    })
    .to(`.${styles.mask}`, { y: "-100%", duration: 1, ease: "power3" })
    .to(
      `.${styles.maskFixed}`,
      {
        y: "100%",
        duration: 1,
        ease: "power3",
      },
      "-=1"
    );
};
