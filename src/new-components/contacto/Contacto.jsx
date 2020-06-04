import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";

import { GlobalContext } from "./../../context/global.context";

import styles from "./contacto.module.scss";
import ButtonClose from "./../button-close/ButtonClose";

const Contacto = () => {
  const { isContactOpen, toggleContact } = useContext(GlobalContext);

  function handleContact() {
    if (isContactOpen) {
      toggleContact();
    }
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "visible";
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={styles.modal}
    >
      <div className={styles.modalSmall}>
        <ButtonClose handleClick={handleContact} />
        <section className={styles.modalText}>
          <h2>Contactanos</h2>
          <p>Para mas información no dudes en...</p>
          <p>
            <strong>Escribenos</strong>
            <br />
            <a href="/">mail@aurora.com</a>
            <br />
            <a href="/">+34 3094056789</a>
          </p>
          <p>
            <strong>Dirección</strong>
            <br />
            cll
            <br />
            ciudad
            <br />
            pais
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Contacto;
