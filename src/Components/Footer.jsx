import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <div className="footer__container__left__logo">
            <h1>
              <Link to="/">MovieHub</Link>
            </h1>
          </div>
        </div>
        <div className="footer__container__right">
          <div className="footer__container__right__contact">
            <Link to="/contact-us">
              <p>Contact us</p>
            </Link>
          </div>
          <div className="footer__container__right__text">
            <p>© 2021-2022 moviehub.ge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
