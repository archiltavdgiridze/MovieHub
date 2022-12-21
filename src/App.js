import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllMovies from "./Components/AllMovies/AllMovies";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ContactUs from "./Components/ContactUs/ContactUs";
import MostLiked from "./Components/MostLiked/MostLiked";
import MovieDetails from "./Components/Moviedetails";

const App = () => {
  return (
    <Router>
      <div className="app_div">
        <div className="sidebar_div">
          <Sidebar />
        </div>
        <div className="wrapper_landing">
          <div className="navbar">
            <Navbar />
          </div>
          {/* </Route> */}
          <div className="pages">
            <Route exact path="/MovieHub/">
              <MainPage />
            </Route>
            <Route exact path="/MovieHub/most-liked">
              <MostLiked />
            </Route>
            <Route exact path="/MovieHub/all-movies">
              <AllMovies />
            </Route>
            <Route exact path="/MovieHub/contact-us">
              <ContactUs />
            </Route>
            <Route exact path="/movie/:id">
              <MovieDetails />
            </Route>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
