import React, { useContext } from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { RoomContext } from "./../context/room.context";
import Loading from "./Loading";

const RoomsContainer = () => {
  const { loading, sortedRooms, rooms } = useContext(RoomContext);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortedRooms} />
        </>
      )}
    </div>
  );
};

export default RoomsContainer;
