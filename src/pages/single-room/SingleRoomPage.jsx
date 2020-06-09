import React from "react";

import SingleRoom from "./../../new-components/SingleRoom/SingleRoom";
import Loading from "./../../components/Loading";
import ModalAnimation from "./../../new-components/modal-animation/ModalAnimation";
import { useRoomsStateContext } from "../../context/roomsContex/RoomsContext";

const SingleRoomPage = ({ match }) => {
  const { getRoom, fetching } = useRoomsStateContext();
  const slug = match.params.slug;
  let room = getRoom(slug);

  return (
    <ModalAnimation>
      {fetching ? (
        <Loading />
      ) : room ? (
        <SingleRoom room={room} />
      ) : (
        "ROOM NOT FOUND"
      )}
    </ModalAnimation>
  );
};

export default SingleRoomPage;
