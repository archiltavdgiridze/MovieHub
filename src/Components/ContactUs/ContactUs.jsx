import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    // contact us page

    <div className="contact">
      <div className="contact__container">
        <div className="contact__container__left">
          <div className="contact__container__left__logo">
            <h1>
              <Link to="/">MovieHub</Link>
            </h1>
          </div>
          <div className="contact__container__left__text">
            <a href="https://github.com/archiltavdgiridze?tab=repositories">
              <p>Archil Tavdgiridze Designs</p>
            </a>
          </div>
        </div>
        <div className="contact__container__right">
          <div className="contact__container__right__text">
            <h2>
              Contact me at:
              <br />
              <a href="https://www.linkedin.com/in/archiltavdgiridze/">
                achitavgiridze@moviehub.ge
              </a>
            </h2>
            <h2>
              or on mobile:
              <br />
              <a href="">+995 599-mov-ieh-ubb</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
