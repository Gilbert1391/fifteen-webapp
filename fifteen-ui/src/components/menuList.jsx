import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const MenuList = ({ data, onDelete, heading, admin }) => {
  return (
    <div className="menu-section">
      <h3 className="menu-section__heading">{heading}</h3>
      {data.length === 0 && <div className="menu-section__line">&nbsp;</div>}
      <div className="menu-section__flex">
        {data.map(item => (
          <div className="menu-item" key={item._id}>
            {admin && (
              <React.Fragment>
                <Link to={`/menu-item/${item._id}`}>
                  <button className="item-btn item-btn--edit">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </Link>
                <button
                  onClick={() => onDelete(item._id)}
                  className="item-btn item-btn--delete"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </React.Fragment>
            )}
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

export default MenuList;
