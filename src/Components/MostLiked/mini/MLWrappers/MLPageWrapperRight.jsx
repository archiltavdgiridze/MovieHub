import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import LoadAnim from "../../../../Components/LoadAnim";
// import ResultWT from '../Components/MainPage/mini/ResultWT';
import MLPageResultRight from './../MLResults/MLPageResultRight';


const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const MLPageWrapperRight = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&#39"
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
        setData(data.results);
        setLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ml_page_wrapper_right">
      <div className="most_liked_page_movies_right">
        {loading ? (
          <>
            <div className="loading_text">Get cozy! movies ... loading</div>
            <div className="loading_animation">
              <LoadAnim />
            </div>
          </>
        ) : (
          <MLPageResultRight
            movies={data[Math.floor(Math.random() * (19 - 0 + 1)) + 0]}
          />
        )}
      </div>
    </div>
  );
};

export default MLPageWrapperRight;
