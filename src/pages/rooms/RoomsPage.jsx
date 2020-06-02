import React from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import ModalAnimation from "./../../new-components/modal-animation/ModalAnimation";
import RoomsContainer from "./../../new-components/rooms-container/RoomsContainer";

import styles from "./roomsPage.module.scss";

const RoomsPage = () => {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <ModalAnimation>
      <div className={styles.container}>
        <button onClick={handleBack} className={styles.btnClose}>
          <AiOutlineClose className={styles.iconClose} />
        </button>
        <button className={styles.btnReserve}>Reservar</button>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Nuestras Habitaciones</h1>
        </div>
        <section className={styles.rooms}>
          <RoomsContainer />
        </section>
      </div>
    </ModalAnimation>
  );
};

export default RoomsPage;
