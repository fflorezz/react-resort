import React, { useEffect } from "react";

import { useOnScreen } from "../../hooks/useOnScreen";

import styles from "./heading.module.scss";
import { headingAnimation, headingAnimationOut } from "./heading.motion";

const Heading = () => {
  const [ref, visible] = useOnScreen(0.5);

  useEffect(() => {
    visible ? headingAnimation() : headingAnimationOut();
  }, [visible]);

  return (
    <div ref={ref} className={styles.heading}>
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
