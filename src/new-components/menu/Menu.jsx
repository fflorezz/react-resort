import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";

import { GlobalContext } from "../../context/global.context";

import BurgerBtn from "../burger-btn/BurgerBtn";

import styles from "./menu.module.scss";
import { menuBgIn, menuBgOut } from "./menu.motion";

const Menu = () => {
  const [background, setBackground] = useState(false);
  const { isMenuOpen } = useContext(GlobalContext);

  const handleScrollMenu = useCallback(
    (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 100 && !background) {
        setBackground(true);
      }
      if (scrolled < 100 && background) {
        setBackground(false);
      }
    },
    [background]
  );

  useEffect(() => {
    const listener = document.addEventListener("scroll", handleScrollMenu);
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [handleScrollMenu]);

  useEffect(() => {
    if (!isMenuOpen && background) {
      menuBgIn();
    } else {
      menuBgOut();
    }
  }, [background, isMenuOpen]);

  return (
    <div className={styles.menu}>
      <div className={styles.menuBar}>
        <div className={styles.menuBarBg} />
        <div className={styles.menuButtons}>
          <ul className={styles.menuList}>
            <Link to={"/"}>
              <li className={styles.menuButton}>Contacto</li>
            </Link>
            <Link to={"/"}>
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
            rel="noopener noreferrer"
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
