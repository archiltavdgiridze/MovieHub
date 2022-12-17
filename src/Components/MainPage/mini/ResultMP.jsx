import React from "react";

export default function ResultMP(props) {
  console.log(props.movies);
  const Boxes = () => {
    return (
      <BoxMP
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
    <div className="mp_return_box">
      <Boxes />
    </div>
  );
}

const BoxMP = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="mp_box">
      <div className="mp_img_div">
        <img src={IMG_PATH + props.image} />
      </div>

      <div className="mp_box_info">
        <div className="mp_box_content">
          <div className="title">{props.title}</div>
          {/* <div className="overview">{props.overview}</div> */}
          <div className="rating">{"IMDDB rating: " + props.rating}</div>
          <div className="relDate">{"Release date: " + props.relDate}</div>
        </div>
      </div>
    </div>
  );
};
