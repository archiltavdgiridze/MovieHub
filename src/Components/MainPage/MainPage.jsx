// This is the main page of the website which is the first page that the user will see when he opens the website and it contains the most liked movies and the movies that are watched today

import React from "react";

import WatchToday from "./mini/WatchToday";
import MostLiked from "./mini/MostLiked";
import Footer from './../Footer';

const MainPage = () => {
  return (
    <div className="main_div">
      <WatchToday />
      <MostLiked />
      <Footer />
    </div>
  );
};

export default MainPage;
