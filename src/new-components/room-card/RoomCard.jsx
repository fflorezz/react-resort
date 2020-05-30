import React from "react";
import { Link } from "react-router-dom";

import styles from "./roomCard.module.scss";

const RoomCard = ({ room, refCallback }) => {
  const { name, slug, images } = room;
  return (
    <article ref={(el) => refCallback(el)} className={styles.room}>
      <Link to={`/rooms/${slug}`} className={styles.roomLink}>
        <div className={styles.imgContainer}>
          <img src={images[0]} alt="single room" />
          <div className={styles.roomName}>
            <h2> {name}</h2>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RoomCard;
