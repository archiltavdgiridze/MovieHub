// This component is used to display the right side of the ML page and it is imported in the MostLiked.jsx component

import React from "react";

export default function MLPageResultRight(props) {
  const Boxes = () => {
    return (
      // this is the component that will be used to display the watch today section of the main page and it will be used in the main page component
      <BoxMLPRight
        key={props.movies.index}
        title={props.movies.original_title}
        image={props.movies.poster_path}
        overview={props.movies.overview}
        rating={props.movies.vote_average}
        relDate={props.movies.release_date}
      />
    );
  };

  return (
    <div className="ml_page_result_right">
      
      <Boxes />
    </div>
  );
}

const BoxMLPRight = (props) => {
  // img path of api
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="ml_page_box_right">
      {/* info that comes with poster */}
      <div className="ml_page_box_info_right">
        <div className="ml_page_box_content_right">
          <div className="title">{props.title}</div>
          <div className="rating">{"IMDDB rating: " + props.rating}</div>
          <div className="relDate">{"Release date: " + props.relDate}</div>
          <div className="overview">{props.overview}</div>
        </div>
      </div>
      {/* poster img */}
      <div className="ml_page_img_div_right">
        <img src={IMG_PATH + props.image} />
      </div>
    </div>
  );
};
