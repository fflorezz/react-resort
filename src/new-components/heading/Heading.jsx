import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

import styles from "./heading.module.scss";
import { headingAnimation, headingAnimationOut } from "./heading.motion";

const Heading = () => {
  const headingRef = useRef(null);

  const intersection = useIntersection(headingRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection) {
      intersection && intersection.intersectionRatio < 0.5
        ? headingAnimationOut()
        : headingAnimation();
    }
  }, [intersection]);

  return (
    <div ref={headingRef} className={styles.heading}>
      <h1 className={styles.headingTitle}>
        <div className={styles.titleLineContainer}>
          <span className={styles.titleLine}>Bar</span>
        </div>
        <div className={styles.titleLineContainer}>
          <span className={styles.titleLine}>&Champagne</span>
        </div>
      </h1>
      <p className={styles.headingText}>
        El lugar perfecto para esos desayunos que se alargan o esas tardes de
        tertulia, de conversación en grupos alrededor de un café. Invita a
        estar, tiene personalidad propia, muta, cambia, pero siempre recibe y
        acoge.
      </p>
    </div>
  );
};

export default Heading;
