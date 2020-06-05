import React from "react";

import HeaderReservas from "./../../new-components/header-reservas/HeaderReservas";

import ModalAnimation from "./../../new-components/modal-animation/ModalAnimation";
import FormReservas from "./../../new-components/form-reservas/FormReservas";

// import styles from "./reservas.module.scss";

const Reservas = () => {
  return (
    <ModalAnimation>
      <HeaderReservas />
      <FormReservas />
    </ModalAnimation>
  );
};

export default Reservas;
