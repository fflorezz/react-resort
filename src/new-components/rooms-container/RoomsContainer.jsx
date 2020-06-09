import React from "react";

import Loading from "./../../components/Loading";
import RoomsFilter from "./../../new-components/rooms-filter/RoomsFilter";
import RoomsList from "../../new-components/room-list/RoomList";
import { useRoomsStateContext } from "../../context/roomsContex/RoomsContext";

const RoomsContainer = () => {
  const { fetching, sortedRooms } = useRoomsStateContext();

  return (
    <div>
      {fetching ? (
        <Loading />
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
