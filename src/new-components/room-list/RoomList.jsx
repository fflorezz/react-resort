import React, { useEffect } from "react";

import RoomCard from "./../room-card/RoomCard";

import styles from "./roomList.module.scss";
import { cardsAnimation, cardsAnimationOut } from "./roomList.motion";

const RoomsList = ({ rooms }) => {
  const cardsRef = [];

  useEffect(() => {
    console.log(cardsRef);
    cardsAnimationOut(cardsRef);
    cardsAnimation(cardsRef);
  }, [rooms]);

  return (
    <div>
      {rooms.length === 0 ? (
        <div className="empty-search">
          <h3> No encontramos habitaciones con estos parámetros</h3>
        </div>
      ) : (
        <section className={styles.roomsList}>
          <div className={styles.roomsListCenter}>
            {rooms.map((room, idx) => (
              <RoomCard
                key={idx}
                room={room}
                refCallback={(el) => (cardsRef[idx] = el)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default RoomsList;
