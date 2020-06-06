import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import logo from "../../images/logo_transparent_white.png";
import Menu from "./../menu/Menu";
import Nav from "./../nav/Nav";

import { useGlobalStateContext } from "../../context/global-context/GlobaContext";

import styles from "./header.module.scss";
import Contacto from "./../contacto/Contacto";

const Header = () => {
  const { isNavOpen, isContactOpen } = useGlobalStateContext();

  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <Menu />
      <AnimatePresence>{isNavOpen && <Nav />}</AnimatePresence>
      {isContactOpen && <Contacto />}
    </div>
  );
};

export default Header;
