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

  return <div className="return_box">{boxes}</div>;
}

const Box = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="box">
      <div className="img_div">
        <img src={IMG_PATH + props.image} />
      </div>

      <div className="box_info">
        <div className="box_content">
          <div className="title">{props.title}</div>
          {/* <div className="overview">{props.overview}</div> */}
          <div className="rating">{"IMDDB rating: " + props.rating}</div>
          {/* <div className="relDate">{"Release date: " + props.relDate}</div> */}
        </div>
      </div>
    </div>
  );
};
