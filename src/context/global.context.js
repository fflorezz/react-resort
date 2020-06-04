import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    isNavOpen: false,
    isContactOpen: false,
    intro: true,
  });

  function toggleNav() {
    setState({
      ...state,
      isNavOpen: !state.isNavOpen,
    });
  }

  function toggleContact() {
    setState({
      ...state,
      isContactOpen: !state.isContactOpen,
    });
  }

  function turnofIntro() {
    setState({
      ...state,
      intro: false,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ ...state, toggleNav, toggleContact, turnofIntro }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
