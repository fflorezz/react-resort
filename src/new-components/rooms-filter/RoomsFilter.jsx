import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../../context/room.context";

import styles from "./roomsFilter.module.scss";

const RoomsFilter = () => {
  const {
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    options,
    filterRooms,
  } = useContext(RoomContext);

  const [state, setState] = useState({
    type: "all",
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
    filterRooms(state);
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
      {/* <h2 className={styles.title}>Buscar Habitaciones</h2> */}
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
            className={styles.formControl}
          />
        </div>
        {/* end room price */}
        {/* extras */}
        {/* <div className={styles.fromGroup}>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={state.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Mascotas</label>
          </div>
        </div> */}
        {/* end extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
