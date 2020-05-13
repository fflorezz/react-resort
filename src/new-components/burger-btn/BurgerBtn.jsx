import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./burgerBtn.module.scss";

const BurgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <button
      onClick={handleClick}
      type="button"
      className={
        isOpen ? `${styles.burgerBtn} ${styles.isOpen}` : styles.burgerBtn
      }
    >
      <div className={styles.btnBackground}></div>
      <FaAlignRight className={styles.burgerIcon} />
      <AiOutlineClose className={styles.burgerIconClose} />
    </button>
  );
};

export default BurgerBtn;
