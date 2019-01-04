import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SelectInput = ({ data, onChange, error }) => {
  const options = ["Snack", "Sandwich", "Main", "Cocktail", "Wine", "Beer"];
  const categories = options.filter(option => option !== data.category);

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
        Category *
      </label>
      <select
        name="category"
        id="category"
        className="form__input "
        onChange={onChange}
      >
        <option>{data.category}</option>
        {categories.map(el => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
