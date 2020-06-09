import React from "react";
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
import { useFormvalidation } from "./../../hooks/useFormValidation";

const TODAY = dateFormater(new Date());

const INITIAL_STATE = {
  name: "",
  email: "",
  startDate: TODAY,
  endDate: TODAY,
  guests: 1,
};

const FormReservas = () => {
  const dispatch = useGlobalDispatchContext();
  const { isSaving } = useGlobalStateContext();
  const {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
  } = useFormvalidation(INITIAL_STATE, uploadReservation);

  function uploadReservation(resetInputs) {
    dispatch(saveReservation());
    setTimeout(() => {
      dispatch(saveReservationSucces(values));
      dispatch(toggleReservation());
      resetInputs();
    }, 4000);
  }

  return (
    <div className={styles.container}>
      <h1>Elige una fecha</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="startDate">Chekin</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={values.startDate}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="endDate">Checkout</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={values.endDate}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.endDate && <p className={styles.error}>{errors.endDate}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="guests">Huespedes</label>
          <select
            name="guests"
            id="guests"
            value={values.guests}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5, 6, 10].map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button disabled={isSubmitting} className={styles.btn}>
          {isSaving ? <FaSpinner /> : "Reservar Ahora"}
        </button>
      </form>
    </div>
  );
};

export default FormReservas;
