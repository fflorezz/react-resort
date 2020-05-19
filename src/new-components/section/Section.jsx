import React from "react";

import styles from "./section.module.scss";

const Section = ({ children, id, row }) => {
  return (
    <div className={styles.mask}>
      <section
        id={id}
        className={
          row ? `${styles.section} ${styles.row}` : `${styles.section}`
        }
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
