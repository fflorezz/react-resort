import React, { useState, useEffect } from "react";

import { useRoomsStateContext } from "../../context/roomsContex/RoomsContext";
import { useRoomsDispatchContext } from "./../../context/roomsContex/RoomsContext";

import { filterRooms } from "./../../context/roomsContex/roomsActions";

import styles from "./roomsFilter.module.scss";

const RoomsFilter = () => {
  const {
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    options,
  } = useRoomsStateContext();

  const dispatch = useRoomsDispatchContext();

  const [state, setState] = useState({
    type: "todas",
    capacity: "1",
    price: maxPrice,
    minSize: minSize,
    maxSize: maxSize,
    breakfast: false,
    pets: false,
    minPrice: minPrice,
    maxPrice: maxPrice,
  });

  useEffect(() => {
    dispatch(filterRooms(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function handleChange({ target: { type, name, value, checked } }) {
    if (type === "checkbox") {
      value = checked;
    }
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <section className={styles.filterContainer}>
      <form action="" className={styles.filterForm}>
        {/* Select Type */}
        <div className={styles.formGroup}>
          <label htmlFor="type">Tipo</label>
          <select
            name="type"
            id="type"
            value={state.type}
            className={styles.formControl}
            onChange={handleChange}
          >
            {options.type.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/*  end Select Type */}
        {/* Guests */}
        <div className={styles.formGroup}>
          <label htmlFor="capacity">Huespedes</label>
          <select
            name="capacity"
            id="capacity"
            value={state.capacity}
            className={styles.formControl}
            onChange={handleChange}
          >
            {options.capacity.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/*  end Guests */}
        {/*  room price */}
        <div className={styles.formGroup}>
          <label htmlFor="price">Precio ${state.price}</label>
          <input
            type="range"
            name="price"
            min={state.minPrice}
            max={state.maxPrice}
            id="price"
            value={state.price}
            onChange={handleChange}
            className={`${styles.formControl} ${styles.slider}`}
          />
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
