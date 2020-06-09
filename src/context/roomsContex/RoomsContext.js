import React, { createContext, useReducer, useContext, useEffect } from "react";

import Client from "../../contentful";

import { roomsReducer } from "./roomsReducer";
import { fetchData } from "./../utils";

export const RoomsStateContext = createContext();
export const RoomsDispatchContext = createContext();

const INITIAL_STATE = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  fetching: false,
  error: null,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
};

export const RoomsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(roomsReducer, INITIAL_STATE);

  useEffect(() => {
    fetchData(Client, dispatch);
  }, []);

  function getRoom(slug) {
    return state.rooms.find((room) => room.slug === slug);
  }

  return (
    <RoomsDispatchContext.Provider value={dispatch}>
      <RoomsStateContext.Provider value={{ ...state, getRoom }}>
        {children}
      </RoomsStateContext.Provider>
    </RoomsDispatchContext.Provider>
  );
};

export const useRoomsStateContext = () => {
  const context = useContext(RoomsStateContext);
  if (context === undefined) {
    throw new Error(
      "useRoomsStateContext must be used within a RoomsStateProvider"
    );
  }
  return context;
};

export const useRoomsDispatchContext = () => {
  const context = useContext(RoomsDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useRoomsDispatchContext must be used within a RoomsDispatchProvider"
    );
  }
  return context;
};
