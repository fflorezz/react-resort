import React, { useEffect } from "react";

import logo from "../../images/logo_transparent_white.png";

import styles from "./mask.module.scss";
import { maskAnimation } from "./mask.motion";

const Mask = () => {
  useEffect(() => {
    maskAnimation();
  }, []);

  return (
    <div className={styles.mask}>
      <div className={styles.maskFixed}>
        <img className={styles.logo} src={logo} alt="" />
      </div>
    </div>
  );
};

export default Mask;
