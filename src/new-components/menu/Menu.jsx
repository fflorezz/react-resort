import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

import BurgerBtn from "../burger-btn/BurgerBtn";

import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuBar}>
        <div className={styles.menuButtons}>
          <ul className={styles.menuList}>
            <li className={styles.menuButton}>Contacto</li>
            <li className={styles.menuButton}>Reservas</li>
          </ul>
        </div>
        <div className={styles.menuDivider}></div>
        <div className={styles.menuSocial}>
          <a className={styles.socialButton} href="">
            <AiOutlineInstagram className={styles.buttonInstagram} />
          </a>
        </div>
      </div>
      <BurgerBtn />
    </div>
  );
};

export default Menu;
