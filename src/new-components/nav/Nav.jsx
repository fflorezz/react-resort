import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import { GlobalContext } from "../../context/global.context";

import logo from "../../images/logo_transparent_white.png";
import heroImg from "../../images/hero-web.jpg";

import styles from "./nav.module.scss";
import { navAnimation } from "./nav.motion";

const Nav = () => {
  const { isMenuOpen, toggleMenu } = useContext(GlobalContext);
  const history = useHistory();

  history.listen((location, action) => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });

  useEffect(() => {
    navAnimation();
  }, []);

  return (
    <motion.nav
      key="modal"
      exit={{ y: "100%", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={styles.nav}
    >
      <motion.div
        exit={{ y: "-100%", opacity: 1 }}
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
              <a href="">Contacto</a>
            </li>
            <li className={styles.subItem}>
              <a href="">Reservas</a>
            </li>
          </ul>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link to="/rooms">
                <span>Servicios</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/rooms">
                <span>Servicios</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/rooms">
                <span>Servicios</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.contactItems}>
            <li className={styles.contactItem}>
              <a href="">
                <span>contacto</span>
              </a>
            </li>
            <li className={styles.contactItem}>
              <a href="">
                <span>contacto</span>
              </a>
            </li>
            <li className={styles.contactItem}>
              <a href="">
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
