import React, { createContext, useReducer, useContext } from "react";

import { globalReduer } from "./globalReducer";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const INITIAL_STATE = {
  isNavOpen: false,
  isContactOpen: false,
  isReservationOpen: false,
  isSaving: false,
  reservationInfo: null,
};

export const GlobaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReduer, INITIAL_STATE);

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalStateContext = () => {
  return useContext(GlobalStateContext);
};

export const useGlobalDispatchContext = () => {
  return useContext(GlobalDispatchContext);
};
