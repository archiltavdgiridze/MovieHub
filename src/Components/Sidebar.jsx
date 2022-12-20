import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar_list">
      <h2>
        <Link to="/">MovieHub</Link>
      </h2>
      <ul>
        <li>
          <Link to="/" className="side-link">
            Main page
          </Link>
        </li>
        <li>
          <Link to="/most-liked" className="side-link">
            Most liked
          </Link>
        </li>
        <li>
          <Link to="/all-movies" className="side-link">
            All Movies
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="side-link">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
