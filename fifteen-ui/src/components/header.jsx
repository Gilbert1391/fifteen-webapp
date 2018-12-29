import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span class="logo__heading">Fifteen</span>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <a className="nav__link" href="">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="">
              About us
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="">
              Menu
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="">
              Drinks
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="">
              Reservation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
