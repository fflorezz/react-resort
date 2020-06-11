import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

import RoomCard from "./../room-card/RoomCard";

import styles from "./roomList.module.scss";
import { container } from "./roomList.motion.js";

const RoomsList = ({ rooms }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [rooms, controls]);

  return (
    <div>
      {rooms.length === 0 ? (
        <div className="empty-search">
          <h3> No encontramos habitaciones con estos parámetros</h3>
        </div>
      ) : (
        <section className={styles.roomsList}>
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className={styles.roomsListCenter}
          >
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </motion.div>
        </section>
      )}
    </div>
  );
};

RoomsList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object),
};

export default RoomsList;
