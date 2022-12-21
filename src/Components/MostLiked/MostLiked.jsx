import React from "react";
import Footer from "./../Footer";
import MLPageWrapperRight from "./mini/MLWrappers/MLPageWrapperRight";
import MLPageWrapperLeft from "./mini/MLWrappers/MLPageWrapperLeft";
// import WTWrapper from "./mini/MLWrappers/MLPageWrapperLeft";

const MostLiked = () => {
  return (
    <div className="most_liked">
      <div className="ml_page_wrapper">
        <div className="ml_main_title">
          <h1>Most Liked</h1>
        </div>

        <div className="ml_page_poster_right">
          <MLPageWrapperRight />
        </div>
        <div className="ml_page_poster_left">
          <MLPageWrapperLeft />
        </div>
        <div className="ml_page_poster_right">
          <MLPageWrapperRight />
        </div>
        <div className="ml_page_poster_left">
          <MLPageWrapperLeft />
        </div>
        <div className="ml_page_poster_right">
          <MLPageWrapperRight />
        </div>
        <div className="ml_page_poster_left">
          <MLPageWrapperLeft />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MostLiked;
