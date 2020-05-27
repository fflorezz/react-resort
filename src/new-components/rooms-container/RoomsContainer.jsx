import React, { useContext } from "react";

import { RoomContext } from "./../../context/room.context";

import Loading from "./../../components/Loading";
import RoomsFilter from "./../../new-components/rooms-filter/RoomsFilter";

const RoomsContainer = () => {
  const state = useContext(RoomContext);
  const { loading, sortedRooms } = state;

  return <div>{loading ? <Loading /> : <RoomsFilter />}</div>;
};

export default RoomsContainer;
