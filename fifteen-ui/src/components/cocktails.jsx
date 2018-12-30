import React from "react";
import DrinkList from "./drinkList";
import cocktailImg from "../img/cocktail.jpg";

const Cocktails = ({ data }) => {
  // data = [];
  const cocktails = data.filter(item => item.category === "cocktail");
  const wines = data.filter(item => item.category === "wine");
  const beers = data.filter(item => item.category === "beer");

  // const beers = [];

  const bg = {
    backgroundImage: `linear-gradient(
        to bottom, rgba(20, 20, 20, 0.8) 70%, rgba(40, 40, 40, 0.8)
        ), url(${cocktailImg})`
  };

  return (
    <section className="cocktails container--big" id="drinks" style={bg}>
      <div className="logo logo--mb-8">
        <span className="logo__heading">Fifteen</span>
        <span className="logo__sub-heading">Bar</span>
      </div>
      <div className="cocktails__flex">
        <DrinkList data={cocktails} heading={"Cocktails"} />
        <DrinkList data={wines} heading={"Wine"} />
        <DrinkList data={beers} heading={"Beers"} />
      </div>
    </section>
  );
};

export default Cocktails;
