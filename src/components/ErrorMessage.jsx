import React from "react";
import { Link } from "react-router-dom";

const ErrorMessage = ({ text, path, btnText }) => {
  return (
    <div className="error">
      <h3>{text}</h3>
      <Link to={path} className="btn-primary">
        {btnText}
      </Link>
    </div>
  );
};

export default ErrorMessage;
