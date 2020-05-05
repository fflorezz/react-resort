import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import ROUTES from "./../PATHS";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="resort" />
          </Link>
          <button onClick={HandleToggle} type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          {ROUTES.map((route, idx) => (
            <li key={idx}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
