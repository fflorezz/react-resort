import React from "react";

import { useRoomsStateContext } from "../../context/roomsContex/RoomsContext";

import RoomsFilter from "./../../new-components/rooms-filter/RoomsFilter";
import RoomsList from "../../new-components/room-list/RoomList";
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
