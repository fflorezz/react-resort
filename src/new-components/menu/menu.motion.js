import { gsap } from "gsap";

import styles from "./menu.module.scss";

const black = "rgb(58, 54, 54)";

export const menuBgIn = () => {
  gsap.to(`.${styles.menuBarBg}`, {
    scaleY: 1,
    duration: 0.3,
    ease: "power2",
    transformOrigin: "top",
  });
  gsap.to(`.${styles.menuBar}`, {
    color: black,
    duration: 0.5,
    ease: "power2",
  });
  gsap.to(`.${styles.menuDivider}`, {
    backgroundColor: black,
    duration: 0.5,
    ease: "power2",
  });
  gsap.to(`.${styles.buttonInstagram}`, {
    fill: black,
    duration: 0.5,
    ease: "power2",
  });
  gsap.to(`.${styles.menu}`, {
    boxShadow: "rgba(0, 0, 0, 0.75) 0px 0px 15px -10px",
    duration: 0.5,
    ease: "power2",
  });
};

export const menuBgOut = () => {
  gsap.to(`.${styles.menuBarBg}`, {
    scaleY: 0,
    duration: 0.3,
    transformOrigin: "bottom",
  });
  gsap.to(`.${styles.menuBar}`, {
    color: "white",
    duration: 0.5,
    ease: "power2",
  });
  gsap.to(`.${styles.menuDivider}`, {
    backgroundColor: "white",
    duration: 0.5,
    ease: "power2",
  });
  gsap.to(`.${styles.buttonInstagram}`, {
    fill: "white",
    duration: 0.5,
    ease: "power2",
  });
  gsap.to(`.${styles.menu}`, {
    boxShadow: "none",
    duration: 0.5,
    ease: "power2",
  });
};
