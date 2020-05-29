import React from "react";

import RoomCard from "./../room-card/RoomCard";

import styles from "./roomList.module.scss";

const RoomsList = ({ rooms }) => {
  return (
    <div>
      {rooms.length === 0 ? (
        <div className="empty-search">
          <h3>Unfortunate no rooms matched your search parameter</h3>
        </div>
      ) : (
        <section className={styles.roomsList}>
          <div className={styles.roomsListCenter}>
            {rooms.map((room, idx) => (
              <RoomCard key={idx} room={room} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default RoomsList;
