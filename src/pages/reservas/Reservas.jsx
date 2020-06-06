import React from "react";

import { useGlobalStateContext } from "../../context/global-context/GlobaContext";

import FormReservas from "./../../new-components/form-reservas/FormReservas";
import ModalAnimation from "./../../new-components/modal-animation/ModalAnimation";
import ModalReserva from "./../../new-components/modal-reserva/ModalReserva";
import HeaderReservas from "./../../new-components/header-reservas/HeaderReservas";

const Reservas = () => {
  const { isReservationOpen } = useGlobalStateContext();

  return (
    <ModalAnimation>
      <HeaderReservas />
      <FormReservas />
      {isReservationOpen && <ModalReserva />}
    </ModalAnimation>
  );
};

export default Reservas;
