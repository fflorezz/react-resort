import React from "react";

import logo from "../../images/logo_transparent_white.png";

import styles from "./errorPage.module.scss";
import { Link } from "react-router-dom";
import ModalAnimation from "./../../components/modal-animation/ModalAnimation";

const ErrorPage = () => {
  return (
    <ModalAnimation>
      <div className={styles.mask}>
        <div className={styles.maskFixed}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="" />
          </Link>
          <div className={styles.text}>
            <h2 className={styles.title}>Error 404</h2>
            <p> Lo sentimos, la página solicitada no existe</p>
          </div>
        </div>
      </div>
    </ModalAnimation>
  );
};

export default ErrorPage;
