import React from "react";
import { Link } from "react-router-dom";

export default function Result(props) {
  const boxes = props.movies.map((item, index) => {
    return (
      <Box
        // items that we choose from api
        id={item.id}
        key={item.index}
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
  // img path of api
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <Link
      to={{
        pathname: `/movie/${props.id}`,
      }}
      className="all_movies_link"
    >
      <div className="box">
        {/* poster img */}
        <div className="img_div">
          <img src={IMG_PATH + props.image} />
        </div>

        {/* info that comes with poster */}
        <div className="box_info">
          <div className="box_content">
            <div className="title">{props.title}</div>
            {/* <div className="overview">{props.overview}</div> */}
            <div className="rating">{"IMDDB rating: " + props.rating}</div>
            {/* <div className="relDate">{"Release date: " + props.relDate}</div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
