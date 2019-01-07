import React from "react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const PhoneNav = ({ onActive, admin, isChecked, onCheck }) => {
  return (
    <div className="phone-nav">
      <input
        ref={isChecked}
        type="checkbox"
        className="phone-nav__checkbox"
        id="nav-toggle"
      />
      <label htmlFor="nav-toggle" className="phone-nav__button">
        <span className="phone-nav__icon">&nbsp;</span>
      </label>
      <nav className="phone-nav__navigation" id="phoneNavigation">
        <Link
          className="phone-nav__link"
          activeClass="nav-link-active"
          to="home"
          spy={true}
          smooth={true}
          onSetActive={onActive}
          onClick={() => onCheck()}
        >
          Home
        </Link>
        <Link
          className="phone-nav__link"
          activeClass="nav-link-active"
          to="about"
          spy={true}
          smooth={true}
          onSetActive={onActive}
          onClick={() => onCheck()}
        >
          About us
        </Link>
        <Link
          className="phone-nav__link"
          activeClass="nav-link-active"
          to="menu"
          spy={true}
          smooth={true}
          onSetActive={onActive}
          onClick={() => onCheck()}
        >
          Menu
        </Link>
        <Link
          className="phone-nav__link"
          activeClass="nav-link-active"
          to="drinks"
          spy={true}
          smooth={true}
          onSetActive={onActive}
          onClick={() => onCheck()}
        >
          Drinks
        </Link>
        <Link
          className="phone-nav__link"
          activeClass="nav-link-active"
          to="reservation"
          spy={true}
          smooth={true}
          onSetActive={onActive}
          onClick={() => onCheck()}
        >
          Reservation
        </Link>
        {admin && (
          <React.Fragment>
            <LinkRouter to="/menu-item/new" className="phone-nav__link">
              Add to menu
            </LinkRouter>
            <LinkRouter to="/logout" className="phone-nav__link">
              Log out
            </LinkRouter>
          </React.Fragment>
        )}
      </nav>
    </div>
  );
};

export default PhoneNav;
