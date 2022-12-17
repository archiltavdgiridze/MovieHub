import React from "react";
import AllMovies from "./Components/AllMovies";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <>
      <div className="main_div" id="main_div">
        <div className="sidebar_div">
          <Sidebar />
        </div>

        <div className="wrapper_landing">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="pages">
            <MainPage />
            {/* <AllMovies /> */}
          </div>
        </div>
      </div>

      {/* <Sidebar /> */}
      {/* <Navbar /> */}
    </>
  );
};

export default App;
