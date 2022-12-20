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
