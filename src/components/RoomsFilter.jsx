import React, { useContext } from "react";
import { RoomContext } from "./../context/room.context";
import Title from "./Title";
import { getValuesForOptions } from "../context/utils";

const getValuesOptions = (items, value, additional = null) => {
  console.log("getting values", value);
  const values = [additional, ...new Set(items.map((item) => item[value]))];
  const elements = values.map((item, idx) => (
    <option key={idx} value={item}>
      {item}
    </option>
  ));

  return elements;
};

const RoomsFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    options,
  } = useContext(RoomContext);

  const typeOptions = getValuesOptions(rooms, "type", "all");
  const capacityOptions = getValuesOptions(rooms, "capacity");

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
            value={type}
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
            value={capacity}
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
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id={price}
            value={price}
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
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
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
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
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
