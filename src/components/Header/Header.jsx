import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-left">
        <Link to="/IMDB_clone" className="links">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="IMDB Logo"
          />
        </Link>
        <Link to="/IMDB_clone/movies/top_rated" className="links">
          Top Rated
        </Link>
        <Link to="/IMDB_clone/movies/popular" className="links">
          Popular
        </Link>
        <Link to="/IMDB_clone/movies/upcoming" className="links">
          Upcoming
        </Link>
        <Link to="/IMDB_clone/search" className="links">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Header;
