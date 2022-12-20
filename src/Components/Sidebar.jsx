import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar_list">
      <h2>MovieHub</h2>
      <div className="sidebar_btn">
        <button>
          <Link to="/" className="side-link">
            Main Page
          </Link>
        </button>
        <button>
          <Link to="/most-liked" className="side-link">
            Most Liked
          </Link>
        </button>
        <button>
          <Link to="/all-movies" className="side-link">
            All Movies
          </Link>
        </button>
        <button>
          <Link to="/contact-us" className="side-link">
            Contact us
          </Link>
        </button>
      </div>

      {/* <ul>
        <li>Main page</li>
        <li>Most liked</li>
        <li>All Movies</li>
        <li>Contact us</li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
