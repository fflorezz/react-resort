import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    isMenuOpen: false,
  });

  function toggleMenu() {
    setState({
      ...state,
      isMenuOpen: !state.isMenuOpen,
    });
  }

  return (
    <GlobalContext.Provider value={{ ...state, toggleMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};
