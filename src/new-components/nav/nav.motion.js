import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./nav.module.scss";

export const navAnimation = () => {
  gsap
    .timeline()
    .set(`.${styles.nav}`, { visibility: "visible" })
    .from(`.${styles.nav}`, {
      y: "-100%",
      duration: 1,
      transformOrigin: "top",
      ease: "power4",
    })
    .from(
      `.${styles.navMask}`,
      {
        y: "100%",
        duration: 1,
        transformOrigin: "top",
        ease: "power4",
      },
      "-=1"
    )
    .from(`.${styles.navItem}`, {
      opacity: 0,
      y: "50%",
      stagger: 0.1,
      ease: "power3",
    })
    .from(
      `.${styles.contactItem}`,
      {
        opacity: 0,
        y: "50%",
        stagger: 0.1,
        ease: "power3",
      },
      "-=0.1"
    )
    .from(
      `.${styles.navImage}`,
      {
        opacity: 0,
        scale: 1.5,
        duration: 3.5,
        ease: "power3",
      },
      "-=3"
    );
};
