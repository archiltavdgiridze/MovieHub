import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_list">
      <ul>
        <li>
          <Link to="/all-movies" className="nav-link">
            All
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            TV Shows
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
