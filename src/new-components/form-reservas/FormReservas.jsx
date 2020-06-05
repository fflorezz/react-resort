import React, { useState, useContext } from "react";

import { GlobalContext } from "./../../context/global.context";

import styles from "./formReservas.module.scss";
import { dateFormater } from "./../../utils";

const FormReservas = () => {
  const { setReservaInfo } = useContext(GlobalContext);

  const TODAY = dateFormater(new Date());

  const [state, setState] = useState({
    startDate: TODAY,
    endDate: TODAY,
    huespedes: 1,
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
    console.log(state);
    setReservaInfo(state);
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
          <label htmlFor="huespedes">Huespedes</label>
          <select
            name="huespedes"
            id="huespedes"
            value={state.huespedes}
            onChange={handleInput}
          >
            {[1, 2, 3, 4, 5, 6, 10].map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.btn}>Reservar Ahora</button>
      </form>
    </div>
  );
};

export default FormReservas;
