import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TextArea = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form__group">
      {error && (
        <div className="form__alert">
          <FontAwesomeIcon
            icon={faTimes}
            className="fa fa-times form__alert--icon"
          />
          {error}
        </div>
      )}
      <label htmlFor="message" className="form__heading">
        {label}
      </label>
      <textarea
        id={name}
        className="form__input form__input--text-area"
        rows="3"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
