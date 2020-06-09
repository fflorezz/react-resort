import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Arrow } from "../../images/arrow.svg";

import styles from "./viewBtn.module.scss";

const ViewBtn = ({ slug }) => {
  return (
    <Link to={slug} className={styles.btn}>
      <Arrow className={styles.arrow} />
      <span>VER HABITACIÓN</span>
    </Link>
  );
};

ViewBtn.propTypes = {
  slug: PropTypes.string,
};
export default ViewBtn;
