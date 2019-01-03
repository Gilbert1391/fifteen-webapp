import React from "react";
import Header from "./header";
import heroImg from "../img/hero-bg.jpg";

const Hero = ({ data }) => {
  const bg = {
    backgroundImage: `linear-gradient(
        to bottom,
        rgba(46, 46, 44, 0.8),
        rgba(46, 46, 44, 0.8)
      ),
      url(${heroImg})`
  };

  return (
    <section className="hero" id="home" style={bg}>
      <Header />
      <div className="hero__content">
        <h1 className="hero__heading">{data.heading}</h1>
        <p className="hero__sub-heading">{data.subHeading}</p>
      </div>
    </section>
  );
};

export default Hero;
