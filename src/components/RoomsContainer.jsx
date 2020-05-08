import React, { useContext, useEffect } from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { RoomContext } from "./../context/room.context";
import Loading from "./Loading";

const RoomsContainer = () => {
  const state = useContext(RoomContext);
  const { loading, sortedRooms, rooms, setState } = state;

  useEffect(() => {
    setState({
      ...state,
      filtered: state.filtered,
    });
  }, []);

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
