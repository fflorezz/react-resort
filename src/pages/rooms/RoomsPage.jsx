import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import ModalAnimation from "./../../new-components/modal-animation/ModalAnimation";

import styles from "./roomsPage.module.scss";
import { heroAnimation } from "./rooms.motion";
import { useRef } from "react";
import RoomsContainer from "./../../new-components/rooms-container/RoomsContainer";

const RoomsPage = () => {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  const heroRef = useRef(null);

  useEffect(() => {
    heroAnimation(heroRef);
  }, []);

  return (
    <ModalAnimation zIndex={100}>
      <div className={styles.container}>
        <button onClick={handleBack} className={styles.btnClose}>
          <AiOutlineClose className={styles.iconClose} />
        </button>
        <button className={styles.btnReserve}>Reservar</button>
        <div className={styles.hero}>
          <h1 ref={heroRef} className={styles.heroTitle}>
            Nuestras Habitaciones
          </h1>
        </div>
        <section className={styles.rooms}>
          <RoomsContainer />
        </section>
      </div>
    </ModalAnimation>
  );
};

export default RoomsPage;
