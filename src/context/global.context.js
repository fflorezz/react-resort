import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    isNavOpen: false,
    intro: true,
  });

  function toggleNav() {
    setState({
      ...state,
      isNavOpen: !state.isNavOpen,
    });
  }

  function turnofIntro() {
    setState({
      ...state,
      intro: false,
    });
  }

  return (
    <GlobalContext.Provider value={{ ...state, toggleNav, turnofIntro }}>
      {children}
    </GlobalContext.Provider>
  );
};
