import React from "react";
import Result from "./Components/Result";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([""]);


  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  };

  const getAllMovies = () => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    axios
      .get(SEARCH_API + search)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <div className="return_div">
      <div>
        <a href="https://archiltavdgiridze.github.io/movie-site/">
          <h1>Your favorite movies are here! </h1>
        </a>
      </div>
      <input
        type="search"
        value={search}
        onChange={changeTheSearch}
        placeholder="type what you want to watch today"
      />
      {movies.length === 0 ? (
        <>
          <div className="loading_text">Get cozy! movies ... loading</div>
          <div className="loading_animation">
            <svg
              class="pl"
              viewBox="0 0 128 128"
              width="128px"
              height="128px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="hsl(193,90%,55%)" />
                  <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                </linearGradient>
              </defs>
              <circle
                class="pl__ring"
                r="56"
                cx="64"
                cy="64"
                fill="none"
                stroke="hsla(0,10%,10%,0.1)"
                stroke-width="16"
                stroke-linecap="round"
              />
              <path
                class="pl__worm"
                d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
                fill="none"
                stroke="url(#pl-grad)"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="44 1111"
                stroke-dashoffset="10"
              />
            </svg>
          </div>
        </>
      ) : (
        <Result movies={movies} />
      )}
    </div>
  );
};

export default App;
