import React from "react";
import { Link } from "react-router-dom";

import Hero from "./../components/Hero";
import Banner from "./../components/Banner";

const SingleRoom = ({ room }) => {
  const {
    images,
    name,
    description,
    price,
    size,
    capacity,
    pets,
    breakfast,
    extras,
  } = room;
  return (
    <>
      <Hero hero="roomsHero" imgUrl={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </Hero>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((image, idx) =>
            idx > 0 ? <img key={idx} src={image} alt={name} /> : ""
          )}
        </div>
        <div className="single-room-info">
          <article className="description">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              Max Capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pet allowed" : "No pets allowed"}</h6>
            <h6>{breakfast ? "Free breakfast" : ""}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
