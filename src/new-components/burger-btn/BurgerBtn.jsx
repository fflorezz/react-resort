import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "./../../context/global-context/GlobaContext";

import { toggleNav } from "./../../context/global-context/globalActions";

import styles from "./burgerBtn.module.scss";

const BurgerBtn = () => {
  const { isNavOpen } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  function handleClick() {
    dispatch(toggleNav());
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className={
        isNavOpen ? `${styles.burgerBtn} ${styles.isOpen}` : styles.burgerBtn
      }
    >
      <div className={styles.btnBackground}></div>
      <FaAlignRight className={styles.burgerIcon} />
      <AiOutlineClose className={styles.burgerIconClose} />
    </button>
  );
};

export default BurgerBtn;
