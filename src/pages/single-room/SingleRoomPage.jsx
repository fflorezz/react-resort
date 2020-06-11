import React from "react";

import { useRoomsStateContext } from "../../context/roomsContex/RoomsContext";

import SingleRoom from "./../../components/SingleRoom/SingleRoom";
import ModalAnimation from "./../../components/modal-animation/ModalAnimation";
import Spinner from "./../../components/spinner/Spinner";
import ErrorPage from "./../error/ErrorPage";

const SingleRoomPage = ({ match }) => {
  const { getRoom, fetching } = useRoomsStateContext();
  const slug = match.params.slug;
  let room = getRoom(slug);

  return (
    <ModalAnimation>
      {fetching ? (
        <Spinner />
      ) : room ? (
        <SingleRoom room={room} />
      ) : (
        <ErrorPage />
      )}
    </ModalAnimation>
  );
};

export default SingleRoomPage;
