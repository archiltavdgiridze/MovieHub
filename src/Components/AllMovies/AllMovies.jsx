// This is the main component for the AllMovies page and it will be used in the App.jsx file to display the AllMovies page of the website 

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Result from "./mini/Result";
import LoadAnim from "../LoadAnim";
import Footer from "./../Footer";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const AllMovies = () => {
  //this const is used to get the data from the API and it will be used in the useEffect and it will be used to display the movies in the AllMovies page of the website 
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const changeTheSearch = (event) => {
    // this const is used to change the search value and it will be used in the input tag
    setSearch(event.target.value);
  };

  const getAllMovies = () => {
    // this const is used to get all the movies from the API and it will be used in the useEffect
    axios
      .get(API_URL)
      .then((response) => {
        // this is the response from the API and it will be used to display the movies in the AllMovies page of the website
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    // this const is used to get the searched movies from the API and it will be used in the useEffect
    axios
      .get(SEARCH_API + search)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // this useEffect is used to get the data from the API and it will be used to display the movies in the AllMovies page of the website
    setMovies([]);
    if (search === "") {
      getAllMovies();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      // this else statement is used to get the searched movies from the API and it will be used to display the movies in the AllMovies page of the website
      getSearchedMovies();
    }
  }, [search]);

  return (
    <>
      <div className="return_div">
        <div className="all_movies_title">
          <a href="">
            <h1>Your favorite movies are here! </h1>
          </a>
        </div>
        <input
          type="search"
          value={search}
          onChange={changeTheSearch}
          placeholder="type what you want to watch today"
        />
        {loading ? (
          <>
            <div className="loading_text">Get cozy! movies ... loading</div>
            <div className="loading_animation">
              <LoadAnim />
            </div>
          </>
        ) : (
          // this is the Result component and it will be used to display the movies in the AllMovies page of the website
          <Result movies={movies} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllMovies;
