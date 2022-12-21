import React from 'react'
import { Link } from 'react-router-dom';
import MLWrapper from './../../../ReComp/MLWrapper';

const MostLiked = () => {
  return (
    <div className="mp_ml_div">
      <div className="most_liked_text">
        <Link to="/most-liked">
          <h1>Most Liked</h1>
        </Link>
      </div>
      <div className="most_liked_wrapper">
        <div className="most_liked_poster">
          <MLWrapper />
        </div>
        <div className="most_liked_poster">
          <MLWrapper />
        </div>
        <div className="most_liked_poster">
          <MLWrapper />
        </div>
      </div>
    </div>
  );
}

export default MostLiked