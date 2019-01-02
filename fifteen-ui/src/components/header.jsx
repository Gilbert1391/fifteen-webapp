import React from "react";
import Fade from "react-reveal/Fade";
import Nav from "./nav";

const Header = ({ show }) => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo__heading">Fifteen</span>
      </div>
      <nav>
        <Nav />
      </nav>
      <Fade top when={show} collapse>
        <nav className="sticky">
          <Nav />
        </nav>
      </Fade>
    </header>
  );
};

export default Header;
