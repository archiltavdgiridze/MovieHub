import React from "react";

export default function MLPageResultLeft(props) {
  const Boxes = () => {
    return (
      <BoxMLPLeft
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
    <div className="ml_page_result_left">
      <Boxes />
    </div>
  );
}

const BoxMLPLeft = (props) => {
  // img path of api
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="ml_page_box_left">
      {/* poster img */}
      <div className="ml_page_img_div_left">
        <img src={IMG_PATH + props.image} />
      </div>

      {/* info that comes with poster */}
      <div className="ml_page_box_info_left">
        <div className="ml_page_box_content_left">
          <div className="title">{props.title}</div>
          <div className="rating">{"IMDDB rating: " + props.rating}</div>
          <div className="relDate">{"Release date: " + props.relDate}</div>
          <div className="overview">{props.overview}</div>
        </div>
      </div>
    </div>
  );
};
