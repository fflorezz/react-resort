import React from "react";

import styles from "./header.module.scss";
import logo from "../../images/logo_transparent_white.png";
import { Link } from "react-router-dom";
import BurgerBtn from "./../burger-btn/BurgerBtn";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menuMask}></div>
      <Link>
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <BurgerBtn />
    </div>
  );
};

export default Header;
