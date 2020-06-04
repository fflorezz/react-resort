import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./butonClose.module.scss";

const ButtonClose = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.btnClose}>
      <AiOutlineClose className={styles.iconClose} />
    </button>
  );
};

export default ButtonClose;
