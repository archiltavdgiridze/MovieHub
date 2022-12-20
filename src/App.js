import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllMovies from "./Components/AllMovies/AllMovies";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ContactUs from "./Components/ContactUs/ContactUs";
import MostLiked from './Components/MostLiked/MostLiked';

const App = () => {
  return (
    <Router>
      <div className="app_div">
        {/* <div className="content"> */}

        {/* <Route exact path="/sidebar"> */}
        <div className="sidebar_div">
          <Sidebar />
        </div>
        {/* </Route> */}

        <div className="wrapper_landing">
          {/* <Route exact path="/navbar"> */}
          <div className="navbar">
            <Navbar />
          </div>
          {/* </Route> */}
          <div className="pages">
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/most-liked">
              <MostLiked />
            </Route>
            <Route exact path="/all-movies">
              <AllMovies />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Router>
  );
};

export default App;
