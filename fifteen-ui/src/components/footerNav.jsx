import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faVimeoV
} from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              className="footer-nav__icon"
            />
          </a>
        </li>
        <li className="footer-nav__item">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav__link"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="footer-nav__icon"
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
            <FontAwesomeIcon
              icon={faVimeoV}
              size="lg"
              className="footer-nav__icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
