import React, { useContext } from "react";

import { GlobalContext } from "./../../context/global.context";

import HeaderReservas from "./../../new-components/header-reservas/HeaderReservas";
import FormReservas from "./../../new-components/form-reservas/FormReservas";
import ModalAnimation from "./../../new-components/modal-animation/ModalAnimation";
import ModalReserva from "./../../new-components/modal-reserva/ModalReserva";

const Reservas = () => {
  const { isReservaOpen } = useContext(GlobalContext);

  return (
    <ModalAnimation>
      <HeaderReservas />
      <FormReservas />
      {isReservaOpen && <ModalReserva />}
    </ModalAnimation>
  );
};

export default Reservas;
