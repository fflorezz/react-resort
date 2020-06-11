import React from "react";

import { useGlobalStateContext } from "../../context/global-context/GlobaContext";

import FormReservas from "./../../components/form-reservas/FormReservas";
import ModalAnimation from "./../../components/modal-animation/ModalAnimation";
import ModalReserva from "./../../components/modal-reserva/ModalReserva";
import HeaderReservas from "./../../components/header-reservas/HeaderReservas";

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
