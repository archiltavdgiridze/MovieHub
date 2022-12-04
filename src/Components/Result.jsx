import React from "react";

export default function Result(props) {
  const boxes = props.movies.map((item, index) => {
    return (
      <Box
        key={index}
        image={item.poster_path}
        title={item.original_title}
        overview={item.overview}
        rating={item.vote_average}
        relDate={item.release_date}
      />
    );
  });

  return <div>{boxes}</div>;
}

const Box = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="box_div">
      <img src={IMG_PATH + props.image} />
      <div className="title">{props.title}</div>
      <div className="overview">{props.overview}</div>
      <div className="rating">{props.rating}</div>
      <div className="relDate">{props.relDate}</div>
    </div>
  );
};
