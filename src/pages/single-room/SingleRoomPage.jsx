import React, { useContext } from "react";
import { motion } from "framer-motion";

import { RoomContext } from "./../../context/room.context";

import SingleRoom from "./../../new-components/SingleRoom/SingleRoom";
import Loading from "./../../components/Loading";
import ModalAnimation from "./../../new-components/modal-animation/ModalAnimation";

const SingleRoomPage = ({ match }) => {
  const { getRoom, loading } = useContext(RoomContext);
  const slug = match.params.slug;
  let room = getRoom(slug);

  return (
    <ModalAnimation>
      {loading ? (
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
