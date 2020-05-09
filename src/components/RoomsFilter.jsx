import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "./../context/room.context";
import Title from "./Title";

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
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form action="" className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={state.type}
            className="form-control"
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
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={state.capacity}
            className="form-control"
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
        <div className="form-group">
          <label htmlFor="price">room price ${state.price}</label>
          <input
            type="range"
            name="price"
            min={state.minPrice}
            max={state.maxPrice}
            id="price"
            value={state.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={state.minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={state.maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={state.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={state.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
