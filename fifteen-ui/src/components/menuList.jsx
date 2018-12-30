import React from "react";

const MenuList = ({ data, heading }) => {
  return (
    <div className="menu-section">
      <h3 className="menu-section__heading">{heading}</h3>
      {data.length === 0 && <div className="menu-section__line">&nbsp;</div>}
      <div className="menu-section__flex">
        {data.map(item => (
          <div className="menu-item" key={item._id}>
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
