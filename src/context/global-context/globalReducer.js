import {
  TOGGLE_NAV,
  TOGGLE_RESERVATION,
  TOGGLE_CONTACT,
  SAVE_RESERVATION,
  SAVE_RESERVATION_SUCCES,
} from "./globalTypes";

export const globalReduer = (state, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    case TOGGLE_CONTACT:
      return {
        ...state,
        isContactOpen: !state.isContactOpen,
      };
    case TOGGLE_RESERVATION:
      return {
        ...state,
        isReservationOpen: !state.isReservationOpen,
      };
    case SAVE_RESERVATION:
      return {
        ...state,
        isSaving: true,
      };
    case SAVE_RESERVATION_SUCCES:
      return {
        ...state,
        reservationInfo: action.payload,
        isSaving: false,
      };

    default:
      throw new Error(`Unhandle type action: ${action.type} `);
  }
};
