import React from "react";

import styles from "./header.module.scss";
import logo from "../../images/logo_transparent_white.png";
import { Link } from "react-router-dom";
import BurgerBtn from "./../burger-btn/BurgerBtn";
import Menu from "./../menu/Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <Menu />
    </div>
  );
};

export default Header;
