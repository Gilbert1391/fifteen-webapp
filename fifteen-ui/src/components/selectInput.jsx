import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SelectInput = ({ onChange, error }) => {
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
      <label htmlFor="category" className="form__heading">
        Category
      </label>
      <select
        name="category"
        id="category"
        className="form__input "
        onChange={onChange}
      >
        <option value="" />
        <option>Snack</option>
        <option>Sandwich</option>
        <option>Main</option>
        <option>Cocktail</option>
        <option>Wine</option>
        <option>Beer</option>
      </select>
    </div>
  );
};

export default SelectInput;
