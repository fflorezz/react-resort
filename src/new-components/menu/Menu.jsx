import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

import BurgerBtn from "../burger-btn/BurgerBtn";

import styles from "./menu.module.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuBar}>
        <div className={styles.menuButtons}>
          <ul className={styles.menuList}>
            <Link>
              <li className={styles.menuButton}>Contacto</li>
            </Link>
            <Link>
              <li className={styles.menuButton}>Reservas</li>
            </Link>
            <Link to="/rooms">
              <li className={styles.menuButton}>Habitaciones</li>
            </Link>
          </ul>
        </div>
        <div className={styles.menuDivider}></div>
        <div className={styles.menuSocial}>
          <a
            className={styles.socialButton}
            href="https://www.instagram.com/"
            target="_blank"
          >
            <AiOutlineInstagram className={styles.buttonInstagram} />
          </a>
        </div>
      </div>
      <BurgerBtn />
    </div>
  );
};

export default Menu;
