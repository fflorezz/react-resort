import React from "react";
import { motion } from "framer-motion";

import { useGlobalDispatchContext } from "./../../context/global-context/GlobaContext";

import { toggleContact } from "../../context/global-context/globalActions";

import { useBodyOverFlowHidden } from "./../../hooks/useBodyOverFlowHidden";

import styles from "./contacto.module.scss";
import ButtonClose from "./../button-close/ButtonClose";

const Contacto = () => {
  const dispatch = useGlobalDispatchContext();

  useBodyOverFlowHidden();

  function handleContact() {
    dispatch(toggleContact());
  }

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
          <h2>Contacto</h2>
          <p>
            Para mas información no dudes en contactarnos al email o telefono
            que aparecen a continuacion.
          </p>
          <p>
            <strong>Escribenos</strong>
            <br />
            <a href="mailto:contacto@aurora.com">contacto@aurora.com</a>
            <br />
            <a href="tel:+57 1 9274566">+57 1 9274566</a>
          </p>
          <p>
            <strong>Dirección</strong>
            <br />
            Calle 38 No. 29 - 52 Barrio La Soledad
            <br />
            Cartagena
            <br />
            Colombia
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Contacto;
