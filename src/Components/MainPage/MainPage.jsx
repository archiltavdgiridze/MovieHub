import React from "react";
import axios from "axios";

import WatchToday from "./mini/WatchToday";
import MostLiked from "./mini/MostLiked";

const MainPage = () => {
  return (
    <div className="main_div">
      <WatchToday />
      <MostLiked />
    </div>
  );
};

export default MainPage;
