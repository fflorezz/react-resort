import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/global-context/GlobaContext";

import {
  toggleNav,
  toggleContact,
} from "./../../context/global-context/globalActions";

import { usePathChange } from "./../../hooks/usePathChange";
import { useBodyOverFlowHidden } from "../../hooks/useBodyOverFlowHidden";

import logo from "../../images/logo_transparent_white.png";
import heroImg from "../../images/hero-web.jpg";

import styles from "./nav.module.scss";
import { navAnimation } from "./nav.motion";

const Nav = () => {
  const { isNavOpen } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const [isPathChange, pathName] = usePathChange();

  const [exit, setExit] = useState(true);

  useBodyOverFlowHidden();

  useEffect(() => {
    navAnimation();
  }, []);

  useEffect(() => {
    if (pathName === "/rooms" || pathName === "/reservas") {
      setExit(false);
    }
    if (isPathChange && isNavOpen) {
      dispatch(toggleNav());
    }
  }, [isPathChange, isNavOpen, pathName, dispatch]);

  function handleClick() {
    dispatch(toggleContact());
  }

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
              <Link to="/reservas">Reservas</Link>
            </li>
            <li className={styles.subItem}>
              <Link to="/rooms">Habitaciones</Link>
            </li>
            <li onClick={handleClick} className={styles.subItem}>
              Contacto
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
        </div>
        <div className={styles.navImage}>
          <img src={heroImg} alt="" />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
