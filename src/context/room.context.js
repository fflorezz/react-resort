import React, { createContext, useEffect, useState } from "react";

import items from "../data";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
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

  function formatData(items) {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  return <RoomContext.Provider value={state}>{children}</RoomContext.Provider>;
};
