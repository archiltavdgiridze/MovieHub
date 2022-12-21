import React from "react";
import { Link } from "react-router-dom";

export default function ResultWT(props) {
  console.log(props.movies);
  const Boxes = () => {
    return (
      <BoxWT
        id={props.movies.id}
        key={props.movies.index}
        image={props.movies.poster_path}
        title={props.movies.original_title}
        overview={props.movies.overview}
        rating={props.movies.vote_average}
        relDate={props.movies.release_date}
      />
    );
  };

  return (
    <div className="mp_wt_return_box">
      <Boxes />
    </div>
  );
}

const BoxWT = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <Link
      to={{pathname: `/movie/${props.id}`}} 
      className="mp_wt_link"
      >
      <div className="mp_wt_box">
        <div className="mp_wt_img_div">
          <img src={IMG_PATH + props.image} />
        </div>

        <div className="mp_wt_box_info">
          <div className="mp_wt_box_content">
            <div className="title">{props.title}</div>
            {/* <div className="overview">{props.overview}</div> */}
            <div className="rating">{"IMDDB rating: " + props.rating}</div>
            <div className="relDate">{"Release date: " + props.relDate}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
