import React, { useContext } from "react";

import { RoomContext } from "./../context/room.context";

import Loading from "./../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SingleRoom from "../components/SingleRoom";
import ScrollToTop from "./../components/ScrollToTop";

function SingleRoomPage({ match }) {
  const { getRoom, loading } = useContext(RoomContext);
  const slug = match.params.slug;

  let room = getRoom(slug);

  return (
    <div>
      <ScrollToTop />
      {loading ? (
        <Loading />
      ) : room ? (
        <SingleRoom room={room} />
      ) : (
        <ErrorMessage
          text="Room not found"
          path="/rooms"
          btnText="Back to Rooms"
        />
      )}
    </div>
  );
}

export default SingleRoomPage;
