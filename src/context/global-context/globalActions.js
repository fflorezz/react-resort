import {
  TOGGLE_NAV,
  TOGGLE_CONTACT,
  TOGGLE_RESERVATION,
  SAVE_RESERVATION,
  SAVE_RESERVATION_SUCCES,
  DISABLE_HOME_ANIMATIONS,
} from "./globalTypes";

export const toggleNav = () => ({
  type: TOGGLE_NAV,
});

export const toggleContact = () => ({
  type: TOGGLE_CONTACT,
});

export const toggleReservation = () => ({
  type: TOGGLE_RESERVATION,
});

export const saveReservation = () => ({
  type: SAVE_RESERVATION,
});

export const saveReservationSucces = (reservation) => {
  return {
    type: SAVE_RESERVATION_SUCCES,
    payload: reservation,
  };
};

export const disableHomeAnimations = () => {
  return {
    type: DISABLE_HOME_ANIMATIONS,
  };
};
