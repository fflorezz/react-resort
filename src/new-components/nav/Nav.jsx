import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo_transparent_white.png";
import heroImg from "../../images/hero-web.jpg";

import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navMask}>
        <img className={styles.navLogo} src={logo} alt="aurora" />
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
                <span>ROOMS</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/rooms">
                <span>ROOMS</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/rooms">
                <span>ROOMS</span>
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
      </div>
    </nav>
  );
};

export default Nav;
