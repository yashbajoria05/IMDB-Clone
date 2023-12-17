import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getAllMovies() {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
      );
      const actData = await data.json();
      setMovies(actData.results);
      //   console.log(actData);
    }
    getAllMovies();
  }, [search]);

  return (
    <div className="container">
      <div className="search_bar">
        <form className="input_box">
          <label for="searchBox" className="box">
            Search Your Favorite Movie
          </label>
          <input
            id="searchBox"
            type="text"
            placeholder="Search Here"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <div className="list_cards">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
