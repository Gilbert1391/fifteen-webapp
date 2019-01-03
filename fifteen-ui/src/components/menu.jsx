import React from "react";
import MenuList from "./menuList";

const Menu = ({ data }) => {
  const snacks = data.filter(item => item.category.toLowerCase() === "snack");
  const sandwiches = data.filter(
    item => item.category.toLowerCase() === "sandwich"
  );
  const mains = data.filter(item => item.category.toLowerCase() === "main");

  return (
    <section className="container" id="menu">
      <div className="logo logo--dark logo--mb-8">
        <span className="logo__heading">Fifteen</span>
        <span className="logo__sub-heading">Restaurant</span>
      </div>
      <MenuList data={snacks} heading={"snacks x salad"} />
      <MenuList data={sandwiches} heading={"sandwiches"} />
      <MenuList data={mains} heading={"mains"} />
    </section>
  );
};

export default Menu;
