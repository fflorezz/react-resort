import React from "react";

import { Link } from "react-router-dom";
import ViewBtn from "./../viewBtn/ViewBtn";

import styles from "./textCard.module.scss";

const TextCard = ({ refCallback }) => {
  return (
    <div ref={(el) => refCallback(el)} className={styles.card}>
      <h2 className={styles.title}>Habitacion Uno</h2>
      <div className={styles.divider} />
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nulla.
      </p>
      <Link to="/">
        <ViewBtn />
      </Link>
    </div>
  );
};

export default TextCard;
