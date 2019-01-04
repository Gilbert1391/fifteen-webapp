import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const DrinkList = ({ data, onDelete, heading }) => {
  return (
    <div className="drinks-section">
      <div className="menu-section">
        <h3 className="menu-section__heading">{heading}</h3>
        {data.map(item => (
          <div className="menu-item-drink" key={item._id}>
            <Link to={`/menu-item/${item._id}`}>
              <button className="item-btn item-btn--light item-btn--edit">
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
            </Link>
            <button
              onClick={() => onDelete(item._id)}
              className="item-btn item-btn--light item-btn--delete"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="menu-item__flex">
              <h4 className="menu-item__heading">{item.title}</h4>
              <p>{"$" + item.price}</p>
            </div>
            <p className="menu-item__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkList;
