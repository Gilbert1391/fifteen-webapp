import React from "react";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import vimeo from "../img/vimeo.png";

const FooterNav = () => {
  return (
    <nav>
      <ul className="footer-nav">
        <li className="footer-nav__item">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav__link"
          >
            <img src={twitter} alt="Twitter icon" className="footer-nav__img" />
          </a>
        </li>
        <li className="footer-nav__item">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav__link"
          >
            <img
              src={instagram}
              alt="Instagram icon"
              className="footer-nav__img"
            />
          </a>
        </li>
        <li className="footer-nav__item">
          <a
            href="https://vimeo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav__link"
          >
            <img src={vimeo} alt="Vimeo icon" className="footer-nav__img" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
