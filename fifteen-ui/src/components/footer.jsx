import React from "react";
import FooterNav from "./footerNav";

const Footer = () => {
  return (
    <footer>
      <FooterNav />
      <div class="footer container">
        <p class="paragraph">
          Fifteen Restaurant & Bar, 74 5TH AVENUE, BROOKLYN, NY
          11217212-555-1212
        </p>
        <p class="copyright">&copy; 2018 FIFTEEN. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
