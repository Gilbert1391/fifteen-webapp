import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form__group">
      {error && (
        <div className="form__alert">
          <i className="fa fa-times form__alert--icon" />
          {error}
        </div>
      )}
      <label htmlFor={name} className="form__heading">
        {label}
      </label>
      <input
        id={name}
        type="text"
        className="form__input"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
