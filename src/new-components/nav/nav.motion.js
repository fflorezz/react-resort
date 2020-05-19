import { gsap } from "gsap";

import styles from "./nav.module.scss";

export const navAnimation = () => {
  gsap
    .timeline()
    .set(`.${styles.nav}`, { visibility: "visible" })
    .from(`.${styles.nav}`, {
      y: "-100%",
      duration: 0.8,
      transformOrigin: "top",
      ease: "power1.in",
    })
    .from(
      `.${styles.navMask}`,
      {
        y: "100%",
        duration: 0.8,
        transformOrigin: "top",
        ease: "power1.in",
      },
      "-=0.8"
    )
    .from(
      `.${styles.navItem}`,
      {
        opacity: 0,
        y: "50%",
        stagger: 0.1,
        duration: 1,
        ease: "power3",
      },
      "-=0.3"
    )
    .from(
      `.${styles.contactItem}`,
      {
        opacity: 0,
        y: "50%",
        stagger: 0.1,
        ease: "power3",
        duration: 1,
      },
      "-=0.9"
    )
    .from(
      `.${styles.navImage}`,
      {
        opacity: 0,
        scale: 1.5,
        duration: 4.5,
        ease: "power3",
      },
      "-=3"
    );
};
