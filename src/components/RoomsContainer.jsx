import React, { useContext } from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { RoomContext } from "./../context/room.context";
import Loading from "./Loading";

const RoomsContainer = () => {
  const state = useContext(RoomContext);
  const { loading, sortedRooms } = state;

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
