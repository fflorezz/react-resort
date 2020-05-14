import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo_transparent_white.png";
import Menu from "./../menu/Menu";
import Nav from "./../nav/Nav";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <Menu />
      <Nav />
    </div>
  );
};

export default Header;
