import React from "react";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import SeatBooking from './SeatBooking';

const Moviedetails = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const uniqueMovies = async () => {
      const mobieById = await fetch(
        `https://api.themoviedb.org/3/movie/${
          window.location.href.split("/")[4]
        }?api_key=04c35731a5ee918f014970082a0088b1`
      );
      const movie = await mobieById.json();
      setMovie(movie);
    };
    uniqueMovies();
    console.log(movie);
  }, [movie.id]);
  return (
    <div className="movie_details_outer_wrapper">
      <div className="movie_details">
        <div className="movie_details_img">
          <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} />
        </div>
        <div className="movie_details_text">
          <div className="movie_details_content">
            <div className="title">{movie.title}</div>
            <div className="rating">
              {"IMDDB rating: " + movie.vote_average}
            </div>
            <div className="relDate">
              {"Release date: " + movie.release_date}
            </div>
            <div className="overview">{movie.overview}</div>
          </div>
        </div>
      </div>
      <div className="seat_booking">
        <SeatBooking />
      </div>
      <Footer />
    </div>
  );
};

export default Moviedetails;
