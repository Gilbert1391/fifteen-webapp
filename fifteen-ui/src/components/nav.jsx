import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <Link
          activeClass="nav-link-active"
          className="nav__link"
          to="home"
          spy={true}
          smooth={true}
        >
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link
          activeClass="nav-link-active"
          className="nav__link"
          to="about"
          spy={true}
          smooth={true}
        >
          About us
        </Link>
      </li>
      <li className="nav__item">
        <Link
          activeClass="nav-link-active"
          className="nav__link"
          to="menu"
          spy={true}
          smooth={true}
        >
          Menu
        </Link>
      </li>
      <li className="nav__item">
        <Link
          activeClass="nav-link-active"
          className="nav__link"
          to="drinks"
          spy={true}
          smooth={true}
        >
          Drinks
        </Link>
      </li>
      <li className="nav__item">
        <Link
          activeClass="nav-link-active"
          className="nav__link"
          to="reservation"
          spy={true}
          smooth={true}
        >
          Reservation
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
