import React from "react";
import WTWrapper from "../../../ReComp/WTWrapper"
import MLWrapper from "../../../ReComp/MLWrapper";

const WatchToday = () => {
  return (
    <div className="mp_wt_div">
      <div className="watch_today_text">
        <h1>Watch Today</h1>
      </div>
      <div className="watch_today_wrapper">
        <WTWrapper />
        <WTWrapper />
      </div>
    </div>

  );
};

export default WatchToday;