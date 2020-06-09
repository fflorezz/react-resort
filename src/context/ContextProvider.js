import React from "react";

import { RoomsContextProvider } from "./roomsContex/RoomsContext";
import { GlobaContextProvider } from "./global-context/GlobaContext";

export const ContextProvider = ({ children }) => {
  return (
    <GlobaContextProvider>
      <RoomsContextProvider>{children}</RoomsContextProvider>
    </GlobaContextProvider>
  );
};
