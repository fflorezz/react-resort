import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
  return (
    <div>
      {rooms.length === 0 ? (
        <div className="empty-search">
          <h3>Unfortunate no rooms matched your search parameter</h3>
        </div>
      ) : (
        <section className="roomslist">
          <div className="roomslist-center">
            {rooms.map((room, idx) => (
              <Room key={idx} room={room} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default RoomsList;
