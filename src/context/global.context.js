import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    isMenuOpen: false,
    intro: true,
  });

  function toggleMenu() {
    setState({
      ...state,
      isMenuOpen: !state.isMenuOpen,
    });
  }

  function turnofIntro() {
    setState({
      ...state,
      intro: false,
    });
  }

  return (
    <GlobalContext.Provider value={{ ...state, toggleMenu, turnofIntro }}>
      {children}
    </GlobalContext.Provider>
  );
};
