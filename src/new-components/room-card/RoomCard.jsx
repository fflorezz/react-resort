import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./roomCard.module.scss";
import { item } from "./rommcard.motion.js";

const RoomCard = ({ room }) => {
  const { name, slug, images } = room;

  return (
    <motion.div variants={item} className={styles.room}>
      <Link to={`/rooms/${slug}`} className={styles.roomLink}>
        <div className={styles.imgContainer}>
          <img src={images[0]} alt="single room" />
          <div className={styles.roomName}>
            <h2> {name}</h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default RoomCard;
