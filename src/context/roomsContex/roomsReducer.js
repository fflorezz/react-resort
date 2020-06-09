import {
  FETCH_DATA,
  FETCH_DATA_SUCCES,
  FETCH_DATA_FAILURE,
  FILTER_ROOMS,
} from "./roomsTypes";

import { filterRooms } from "../utils";

export const roomsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_DATA_SUCCES:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    case FILTER_ROOMS:
      return {
        ...state,
        sortedRooms: filterRooms(action.payload, state.rooms),
      };
    default:
      throw new Error(`Unhandle type action: ${action.type} `);
  }
};
