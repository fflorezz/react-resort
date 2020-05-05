import React, { useState } from "react";

import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";

import Title from "./Title";

const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero ad sint nemo",
    },
    {
      icon: <FaHiking />,
      title: "Endles Hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero ad sint nemo",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free shuttle",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero ad sint nemo",
    },
    {
      icon: <FaBeer />,
      title: "Strongest beer",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero ad sint nemo",
    },
  ]);

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((service, idx) => {
          return (
            <article key={idx} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
