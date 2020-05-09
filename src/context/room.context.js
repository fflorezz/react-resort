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
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
  });

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
      maxPrice,
      maxSize,
      options,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function filterRooms(filters) {
    let { type, capacity, price, minSize, maxSize, breakfast, pets } = filters;
    const rooms = state.rooms;
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    // filter by size
    tempRooms = tempRooms.filter(
      (room) => minSize <= room.size && room.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === breakfast);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === pets);
    }
    setState({
      ...state,
      sortedRooms: tempRooms,
    });
  }

  function getRoom(slug) {
    return state.rooms.find((room) => room.slug === slug);
  }

  return (
    <RoomContext.Provider value={{ ...state, getRoom, filterRooms }}>
      {children}
    </RoomContext.Provider>
  );
};
