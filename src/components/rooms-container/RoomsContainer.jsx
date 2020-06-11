import React from "react";

import { useRoomsStateContext } from "../../context/roomsContex/RoomsContext";

import RoomsFilter from "./../../components/rooms-filter/RoomsFilter";
import RoomsList from "../../components/room-list/RoomList";
import Spinner from "./../spinner/Spinner";

const RoomsContainer = () => {
  const { fetching, sortedRooms } = useRoomsStateContext();

  return (
    <div>
      {fetching ? (
        <Spinner />
      ) : (
        <>
          <RoomsFilter />
          <RoomsList rooms={sortedRooms} />
        </>
      )}
    </div>
  );
};

export default RoomsContainer;
