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
  }

  const getAllMovies = () => {
    axios.get(API_URL)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    axios.get(SEARCH_API + search)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
      <h1>Your favorite movies are here! </h1>
      <input type="search" value={search} onChange={changeTheSearch} placeholder="type what you want to watch today" />
      {
        movies.length === 0
          ? <div>Get cozy! movies ... loading</div>
          : <Result movies={movies} />
      }
    </div>
  );
};

export default App;
