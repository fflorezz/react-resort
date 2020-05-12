import React from "react";
import { FaAlignRight } from "react-icons/fa";

import styles from "./header.module.scss";
import logo from "../../../images/logo_transparent_white.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link>
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <button type="button" className={styles.burgerBtn}>
        <FaAlignRight className={styles.burgerIcon} />
      </button>
    </div>
  );
};

export default Header;
