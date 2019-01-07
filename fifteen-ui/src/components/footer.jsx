import React from "react";
import FooterNav from "./footerNav";

const Footer = () => {
  return (
    <footer>
      <FooterNav />
      <div className="footer">
        <div className="container">
          <p>
            Fifteen Restaurant & Bar, 74 5TH AVENUE, BROOKLYN, NY
            11217212-555-1212
          </p>
          <p className="copyright">&copy; 2018 FIFTEEN. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
