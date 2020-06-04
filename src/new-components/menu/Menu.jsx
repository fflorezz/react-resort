import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";

import { GlobalContext } from "../../context/global.context";

import { useToggleBackground } from "./../../hooks/useToggleBackground";
import { useIsScrollToTop } from "./../../hooks/useIsScrollToTop";

import BurgerBtn from "../burger-btn/BurgerBtn";
import logo from "../../images/logo_transparent.png";

import styles from "./menu.module.scss";
import { menuBgIn, menuBgOut } from "./menu.motion";

const Menu = () => {
  const { isNavOpen, isContactOpen, toggleContact } = useContext(GlobalContext);

  const [isScrollToTop] = useIsScrollToTop();

  useToggleBackground({ isNavOpen, isScrollToTop, menuBgIn, menuBgOut });

  function handleContact() {
    if (!isContactOpen) {
      toggleContact();
    }
  }

  return (
    <>
      <img
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={styles.logo}
        src={logo}
        alt="aurora"
      />
      <div className={styles.menu}>
        <div className={styles.menuBar}>
          <div className={styles.menuBarBg} />
          <div className={styles.menuButtons}>
            <ul className={styles.menuList}>
              <li className={styles.menuButton} onClick={handleContact}>
                Contacto
              </li>
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
    </>
  );
};

export default Menu;
