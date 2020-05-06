import React, { createContext, useEffect, useState } from "react";

import items from "../data";
import formatData from "./utils";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured);

    setState({
      ...state,
      rooms,
      featuredRooms,
      loading: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getRoom(slug) {
    return state.rooms.find((room) => room.slug === slug);
  }

  return (
    <RoomContext.Provider value={{ ...state, getRoom }}>
      {children}
    </RoomContext.Provider>
  );
};
