import React from "react";
import { motion } from "framer-motion";

import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../context/global-context/GlobaContext";

import { toggleReservation } from "../../context/global-context/globalActions";

import { useBodyOverFlowHidden } from "../../hooks/useBodyOverFlowHidden";
import ButtonClose from "../button-close/ButtonClose";

import styles from "./modalReserva.module.scss";

const ModalReserva = () => {
  const dispatch = useGlobalDispatchContext();
  const { reservationInfo } = useGlobalStateContext();
  const { startDate, endDate, guests, name, email } = reservationInfo;

  useBodyOverFlowHidden();

  function handleClick() {
    dispatch(toggleReservation());
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={styles.modal}
    >
      <div className={styles.modalSmall}>
        <ButtonClose handleClick={handleClick} />
        <section className={styles.modalText}>
          <h2>Tu reserva ha sido exitosa!</h2>
          <p>
            <strong>NOMBRE: </strong>
            {name.toUpperCase()}
          </p>
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
            {guests}
          </p>
          <p>
            Enviamos la confirmacion de tu reserva al siguiente email:
            <br />
            <strong>{email}</strong>
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default ModalReserva;
