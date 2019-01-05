import React from "react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const Nav = ({ onActive, onInactive, admin }) => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <Link
          activeClass="nav-link-active"
          className="nav__link"
          to="home"
          spy={true}
          smooth={true}
          onSetActive={onInactive}
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
          onSetActive={onActive}
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
      {admin && (
        <React.Fragment>
          <li className="nav__item">
            <LinkRouter to="/menu-item/new" className="nav__link">
              Add Item
            </LinkRouter>
          </li>
          <li className="nav__item">
            <LinkRouter to="/admin" className="nav__link">
              Log out
            </LinkRouter>
          </li>
        </React.Fragment>
      )}
    </ul>
  );
};

export default Nav;
