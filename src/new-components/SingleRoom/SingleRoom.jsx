import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./singleRoom.module.scss";
import ButtonClose from "./../button-close/ButtonClose";

const SingleRoomPage = ({ room }) => {
  const {
    images,
    name,
    description,
    price,
    size,
    capacity,
    pets,
    extras,
  } = room;

  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <div className={styles.container}>
      <ButtonClose handleClick={handleBack} />
      <section className={styles.room}>
        <h1 className={styles.roomTitle}>{name}</h1>
        <p className={styles.roomDescription}>{description}</p>
        <figure className={styles.roomImage}>
          <img src={images[0]} alt="" />
        </figure>
        <h4>Info</h4>
        <ul className={styles.infoList}>
          <li>
            <span>Precio: </span>${price}
          </li>
          <li>
            <span>Tamaño: </span>
            {size}MT2{" "}
          </li>
          <li>
            <span>Capacidad: </span>
            {capacity > 1 ? `${capacity} personas` : `${capacity} persona`}{" "}
          </li>
          <li>
            <span>
              {pets
                ? "Se permite el ingreso de mascotas"
                : "No se permite el ingreso de mascotas"}
            </span>
          </li>
        </ul>
        <h4>Extras</h4>
        <ul className={styles.extraList}>
          {extras.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <button className={styles.btnReserve}>Reservar</button>
      </section>
    </div>
  );
};

export default SingleRoomPage;
