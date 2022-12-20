import React from 'react'
import MLWrapper from './../../../ReComp/MLWrapper';

const MostLiked = () => {
  return (
    <div className="mp_ml_div">
      <div className="most_liked_text">
        <h1>Most Liked</h1>
      </div>
      <div className="most_liked_wrapper">
        <MLWrapper />
        <MLWrapper />
        <MLWrapper />
      </div>
    </div>
  );
}

export default MostLiked