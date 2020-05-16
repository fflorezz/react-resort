import React, { useContext } from "react";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./burgerBtn.module.scss";
import { GlobalContext } from "../../context/global.context";

const BurgerBtn = () => {
  const { isMenuOpen, toggleMenu } = useContext(GlobalContext);

  return (
    <button
      onClick={toggleMenu}
      type="button"
      className={
        isMenuOpen ? `${styles.burgerBtn} ${styles.isOpen}` : styles.burgerBtn
      }
    >
      <div className={styles.btnBackground}></div>
      <FaAlignRight className={styles.burgerIcon} />
      <AiOutlineClose className={styles.burgerIconClose} />
    </button>
  );
};

export default BurgerBtn;
