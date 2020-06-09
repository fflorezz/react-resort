import {
  FETCH_DATA_SUCCES,
  FETCH_DATA_FAILURE,
  FILTER_ROOMS,
} from "./roomsTypes";

export const fetchDataSucces = (rooms) => ({
  type: FETCH_DATA_SUCCES,
  payload: rooms,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const filterRooms = (filters) => ({
  type: FILTER_ROOMS,
  payload: filters,
});
