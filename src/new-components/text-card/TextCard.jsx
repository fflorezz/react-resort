import React from "react";

import ViewBtn from "./../viewBtn/ViewBtn";
import { trimText } from "./../../utils/trimText";

import styles from "./textCard.module.scss";

const TextCard = ({ refCallback, title, description, slug }) => {
  return (
    <div ref={(el) => refCallback(el)} className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider} />
      <p className={styles.text}>{trimText(description, 150)}</p>
      <ViewBtn slug={slug} />
    </div>
  );
};

export default TextCard;
