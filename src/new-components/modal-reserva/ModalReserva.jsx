import React, { useContext } from "react";
import { motion } from "framer-motion";

import { GlobalContext } from "../../context/global.context";

import { useBodyOverFlowHidden } from "../../hooks/useBodyOverFlowHidden";

import styles from "./modalReserva.module.scss";
import ButtonClose from "../button-close/ButtonClose";

const ModalReserva = () => {
  const { toggleReserva, reserva } = useContext(GlobalContext);
  const { startDate, endDate, huespedes } = reserva;

  useBodyOverFlowHidden();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={styles.modal}
    >
      <div className={styles.modalSmall}>
        <ButtonClose handleClick={toggleReserva} />
        <section className={styles.modalText}>
          <h2>Tu reserva ha sido exitosa!</h2>
          <p>
            <strong>CHECKIN: </strong>
            {startDate}
          </p>
          <p>
            <strong>CHECKOUT: </strong>
            {endDate}
          </p>
          <p>
            <strong>HUESPEDES: </strong>
            {huespedes}
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default ModalReserva;
