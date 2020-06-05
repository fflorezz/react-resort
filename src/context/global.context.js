import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    isNavOpen: false,
    isContactOpen: false,
    isReservaOpen: false,
    intro: true,
    reserva: {},
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

  function toggleReserva() {
    setState({
      ...state,
      isReservaOpen: !state.isReservaOpen,
    });
  }

  function turnofIntro() {
    setState({
      ...state,
      intro: false,
    });
  }

  function setReservaInfo(reserva) {
    setState({
      ...state,
      reserva: reserva,
    });

    toggleReserva();
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        toggleNav,
        toggleContact,
        toggleReserva,
        turnofIntro,
        setReservaInfo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
