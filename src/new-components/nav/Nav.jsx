import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import { GlobalContext } from "../../context/global.context";

import { usePathChange } from "./../../hooks/usePathChange";
import { useBodyOverFlowHidden } from "../../hooks/useBodyOverFlowHidden";

import logo from "../../images/logo_transparent_white.png";
import heroImg from "../../images/hero-web.jpg";

import styles from "./nav.module.scss";
import { navAnimation } from "./nav.motion";

const Nav = () => {
  const { isNavOpen, toggleNav } = useContext(GlobalContext);
  const [isPathChange, isPathMatching] = usePathChange("/rooms");

  useBodyOverFlowHidden();

  useEffect(() => {
    navAnimation();
  }, []);

  useEffect(() => {
    if (isPathMatching && isNavOpen) {
      setTimeout(() => {
        toggleNav();
      }, 900);
    }

    if (isPathChange && isNavOpen) {
      toggleNav();
    }
  }, [isPathChange, isPathMatching, isNavOpen, toggleNav]);

  return (
    <motion.nav
      key="modal"
      exit={isPathMatching ? { y: 0 } : { y: "100%", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={styles.nav}
    >
      <motion.div
        exit={isPathMatching ? { y: 0 } : { y: "-100%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={styles.navMask}
      >
        <Link to="/">
          <img
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={styles.navLogo}
            src={logo}
            alt="aurora"
          />
        </Link>
        <div className={styles.navContainer}>
          <ul className={styles.subItems}>
            <li className={styles.subItem}>
              <Link to="/">Reservas</Link>
            </li>
            <li className={styles.subItem}>
              <Link to="/rooms">Habitaciones</Link>
            </li>
          </ul>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <HashLink to="/#bar">
                <span>Bar&Champagne</span>
              </HashLink>
            </li>
            <li className={styles.navItem}>
              <HashLink to="/#mar">
                <span>Mar&Montaña</span>
              </HashLink>
            </li>
            <li className={styles.navItem}>
              <HashLink to="#destacadas">
                <span>Habitaciones Destacadas</span>
              </HashLink>
            </li>
          </ul>
          <ul className={styles.contactItems}>
            <li className={styles.contactItem}>
              <a href="/">
                <span>contacto</span>
              </a>
            </li>
            <li className={styles.contactItem}>
              <a href="/">
                <span>contacto</span>
              </a>
            </li>
            <li className={styles.contactItem}>
              <a href="/">
                <span>contacto</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.navImage}>
          <img src={heroImg} alt="" />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
