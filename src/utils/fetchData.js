import {
  fetchDataSucces,
  fetchDataFailure,
} from "../context/roomsContex/roomsActions";

import { FETCH_DATA } from "../context/roomsContex/roomsTypes";

import { formatContentfullData } from "./formatContentFullData";
import { formatRoomsData } from "./formatRoomsData";

export const fetchData = async (client, dispatch) => {
  dispatch({ type: FETCH_DATA });
  try {
    const response = await client.getEntries({
      content_type: "resortRoom",
      order: "sys.createdAt",
    });
    const data = response.items;
    const items = formatContentfullData(data);
    const rooms = formatRoomsData(items);
    dispatch(fetchDataSucces(rooms));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};
