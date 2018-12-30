import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo__heading">Fifteen</span>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <a className="nav__link" href="#home">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#about">
              About us
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#menu">
              Menu
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#drinks">
              Drinks
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#reservation">
              Reservation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
