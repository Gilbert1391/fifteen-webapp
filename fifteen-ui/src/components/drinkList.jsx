import React from "react";

const DrinkList = ({ data, heading }) => {
  return (
    <div className="drinks-section">
      <div className="menu-section">
        <h3 className="menu-section__heading">{heading}</h3>
        {data.map(item => (
          <div className="menu-item-drink" key={item._id}>
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
