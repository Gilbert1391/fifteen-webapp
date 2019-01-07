import React from "react";
import DrinkList from "./drinkList";
import cocktailImg from "../img/cocktail.jpg";

const Drinks = ({ data, onDelete, admin }) => {
  const cocktails = data.filter(
    item => item.category.toLowerCase() === "cocktail"
  );
  const wines = data.filter(item => item.category.toLowerCase() === "wine");
  const beers = data.filter(item => item.category.toLowerCase() === "beer");

  const bg = {
    backgroundImage: `linear-gradient(
        to bottom, rgba(20, 20, 20, 0.8) 70%, rgba(40, 40, 40, 0.8)
        ), url(${cocktailImg})`
  };

  return (
    <section className="drinks" id="drinks" style={bg}>
      <div className="container--big">
        <div className="logo logo--mb-8">
          <span className="logo__heading">Fifteen</span>
          <span className="logo__sub-heading">Bar</span>
        </div>
        <div className="drinks-flex">
          <DrinkList
            data={cocktails}
            onDelete={onDelete}
            heading={"Cocktails"}
            admin={admin}
          />
          <DrinkList
            data={wines}
            onDelete={onDelete}
            heading={"Wine"}
            admin={admin}
          />
          <DrinkList
            data={beers}
            onDelete={onDelete}
            heading={"Beers"}
            admin={admin}
          />
        </div>
      </div>
    </section>
  );
};

export default Drinks;
