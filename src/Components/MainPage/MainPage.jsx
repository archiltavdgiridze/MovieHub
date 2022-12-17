import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import ResultMP from "./mini/ResultMP";
import LoadAnim from "./../LoadAnim";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&#39"
    )
      .then((response) => response.json())
      .then((data) => {
        // setTimeout(() => {
        setData(data.results);
        setLoading(false);
        // }, 2000);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mainDiv">
      <div className="watch_today_text">
        <h1>watch today</h1>
      </div>
      <div className="watch_today_wrapper">
        <div className="poster_wrapper">
          <div className="watch_today_movies">
            {loading ? (
              <>
                <div className="loading_text">Get cozy! movies ... loading</div>
                <div className="loading_animation">
                  <LoadAnim />
                </div>
              </>
            ) : (
              <ResultMP
                movies={data[Math.floor(Math.random() * (19 - 0 + 1)) + 0]}
              />
            )}
            dsfdsfdsf
          </div>
          <h2>film title</h2>
        </div>
        <div className="poster_wrapper">
          <div className="watch_today_movies">fdfdfd</div>
          <h2>film title</h2>
        </div>
        {/* <div className="most_liked_wrapper">
          <div className="ML_poster_wrapper">
            <div className="watch_today_movies">fdfdfd</div>
            <h2>film title</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainPage;
