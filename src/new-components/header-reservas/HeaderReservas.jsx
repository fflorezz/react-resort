import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";

import styles from "./headerReservas.module.scss";

import logo from "../../images/logo_transparent.png";
import ButtonClose from "./../button-close/ButtonClose";

const HeaderReservas = () => {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.logo}>
            <Link to="/">
              <img
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={styles.logoImg}
                src={logo}
                alt="aurora"
              />
            </Link>
          </div>
          <div className={styles.text}>
            <h1>Aurora Hotel</h1>
            <div className={styles.info}>
              <div className={styles.field}>
                <MdLocationOn />
                <p>Calle 38 No. 29 - 52 Barrio La Soledad, Bogotá Colombia</p>
              </div>
            </div>
          </div>
          <ButtonClose handleClick={handleBack} style={{ background: "red" }} />
        </div>
      </div>
    </div>
  );
};

export default HeaderReservas;
