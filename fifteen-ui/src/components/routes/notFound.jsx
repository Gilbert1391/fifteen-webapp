import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">404 Error :(</h1>
      <p className="error-page__paragraph">Page Not Found</p>
      <Link to="/" className="error-page__link">
        Go back to the front page{" "}
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
          className="error-page__icon"
        />
      </Link>
    </div>
  );
};

export default NotFound;
