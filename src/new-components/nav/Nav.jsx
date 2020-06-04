import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import { GlobalContext } from "../../context/global.context";

import logo from "../../images/logo_transparent_white.png";
import heroImg from "../../images/hero-web.jpg";

import styles from "./nav.module.scss";
import { navAnimation } from "./nav.motion";

const Nav = () => {
  const { isNavOpen, toggleNav } = useContext(GlobalContext);
  const history = useHistory();

  const [exit, setExit] = useState(true);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "visible";
    };
  });

  useEffect(() => {
    const removeHistoryListener = history.listen((location) => {
      // turn off exit animation when  the path changes to /rooms
      if (location.pathname === "/rooms") {
        setExit(false);
        // Wait until room's animation end and then close nav
        setTimeout(() => {
          toggleNav();
        }, 900);
        return;
      }
      // close nav when the route changes
      if (isNavOpen) {
        toggleNav();
      }
    });

    return () => {
      // Remove history listener
      removeHistoryListener();
    };
  });

  useEffect(() => {
    navAnimation();
  }, []);

  return (
    <motion.nav
      key="modal"
      exit={exit ? { y: "100%", opacity: 1 } : { y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={styles.nav}
    >
      <motion.div
        exit={exit ? { y: "-100%", opacity: 1 } : { y: 0 }}
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
