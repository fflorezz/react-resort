import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "./../../context/global-context/GlobaContext";

import {
  saveReservation,
  toggleReservation,
  saveReservationSucces,
} from "../../context/global-context/globalActions";

import { dateFormater } from "./../../utils";

import styles from "./formReservas.module.scss";

const FormReservas = () => {
  const dispatch = useGlobalDispatchContext();
  const { isSaving } = useGlobalStateContext();

  const TODAY = dateFormater(new Date());
  const [state, setState] = useState({
    startDate: TODAY,
    endDate: TODAY,
    guests: 1,
  });

  function handleStartDate({ target: { value } }) {
    setState({
      ...state,
      startDate: value,
      endDate: value,
    });
  }

  function handleInput({ target: { name, value } }) {
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(saveReservation());

    //fake upload
    setTimeout(() => {
      dispatch(saveReservationSucces(state));
      dispatch(toggleReservation());
    }, 4000);
  }

  return (
    <div className={styles.container}>
      <h1>Elige una fecha</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="startDate">Desde el...</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={state.startDate}
            onChange={handleStartDate}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="endDate">Hasta el...</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={state.endDate}
            onChange={handleInput}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="guests">Huespedes</label>
          <select
            name="guests"
            id="guests"
            value={state.guests}
            onChange={handleInput}
          >
            {[1, 2, 3, 4, 5, 6, 10].map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.btn}>
          {isSaving ? <FaSpinner /> : "Reservar Ahora"}
        </button>
      </form>
    </div>
  );
};

export default FormReservas;
