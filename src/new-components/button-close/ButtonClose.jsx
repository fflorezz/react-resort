import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";

import styles from "./butonClose.module.scss";

const ButtonClose = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.btnClose}>
      <AiOutlineClose className={styles.iconClose} />
    </button>
  );
};

ButtonClose.propTypes = {
  handleClick: PropTypes.func,
};

export default ButtonClose;
