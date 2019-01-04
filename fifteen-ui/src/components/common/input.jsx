import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Input = ({ type = "text", name, label, value, onChange, error }) => {
  return (
    <div className="form__group">
      {error && (
        <div className="form__alert">
          <FontAwesomeIcon icon={faTimes} className="form__alert--icon" />
          {error}
        </div>
      )}
      <label htmlFor={name} className="form__heading">
        {label}
      </label>
      <input
        className="form__input"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
