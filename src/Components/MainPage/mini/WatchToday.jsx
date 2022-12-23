// this is the component that will be used to display the watch today section of the main page and it will be used in the main page component 

import React from "react";
import WTWrapper from "../../../ReComp/WTWrapper";

const WatchToday = () => {
  return (
    <div className="mp_wt_div">
      <div className="watch_today_text">
        <h1>Watch Today</h1>
      </div>
      <div className="watch_today_wrapper">
        <div className="watch_today_poster">
          <WTWrapper />
        </div>
        <div className="watch_today_poster">
          <WTWrapper />
        </div>
      </div>
    </div>
  );
};

export default WatchToday;
