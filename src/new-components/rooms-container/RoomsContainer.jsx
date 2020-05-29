import React, { useContext } from "react";

import { RoomContext } from "./../../context/room.context";

import Loading from "./../../components/Loading";
import RoomsFilter from "./../../new-components/rooms-filter/RoomsFilter";
import RoomsList from "../../new-components/room-list/RoomList";

const RoomsContainer = () => {
  const state = useContext(RoomContext);
  const { loading, sortedRooms } = state;

  console.log(sortedRooms);

  return (
    <div>
      {loading ? (
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
