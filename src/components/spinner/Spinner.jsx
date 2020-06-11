import React from "react";
import { FaSpinner } from "react-icons/fa";

import styles from "./spinner.module.scss";

const Spinner = () => {
  return <FaSpinner className={styles.spinner} />;
};

export default Spinner;
