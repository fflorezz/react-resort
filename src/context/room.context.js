import React, { createContext, useEffect, useState } from "react";

import items from "../data";
import { formatData, getValuesForOptions } from "./utils";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    filtered: false,
  });

  useEffect(() => {
    filterRooms();
  }, [state.filtered]);

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured);
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const maxSize = Math.max(...rooms.map((item) => item.size));
    const options = {
      type: getValuesForOptions(rooms, "type", ["all"]),
      capacity: getValuesForOptions(rooms, "capacity"),
    };

    setState({
      ...state,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
      options,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ target: { type, name, value, checked } }) => {
    if (type === "checkbox") {
      value = checked;
    }

    setState({
      ...state,
      [name]: value,
      filtered: !state.filtered,
    });
  };

  function filterRooms() {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = state;
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    if (type !== "all") {
      tempRooms = rooms.filter((room) => room.type === type);
    }

    if (capacity !== 1) {
      tempRooms = rooms.filter((room) => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = rooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = rooms.filter(
      (room) => minSize <= room.size && room.size <= maxSize
    );

    // filter by breakfast
    tempRooms = rooms.filter((room) => room.breakfast === breakfast);

    // filter by pets
    tempRooms = rooms.filter((room) => room.pets === pets);

    setState({
      ...state,
      sortedRooms: tempRooms,
    });
  }

  function getRoom(slug) {
    return state.rooms.find((room) => room.slug === slug);
  }

  return (
    <RoomContext.Provider value={{ ...state, getRoom, handleChange, setState }}>
      {children}
    </RoomContext.Provider>
  );
};
