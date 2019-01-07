import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

const UnexpectedError = () => {
  document.title = "Unexpected Error";
  return (
    <div className="error-page">
      <h1 className="error-page__heading">500 Server Error :(</h1>
      <p className="error-page__paragraph">
        Looks like the server failed to load your request, please try again
        later.
      </p>
      <Link to="/" className="error-page__link">
        Reload
        <FontAwesomeIcon icon={faRedoAlt} className="error-page__icon" />
      </Link>
    </div>
  );
};

export default UnexpectedError;
