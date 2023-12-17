import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { key, base_url } from "../../requests.js";
import Card from "../Card/Card.jsx";
import "./MovieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `${base_url}movie/${
          type ? type : "popular"
        }?api_key=${key}&language=en-US`
      );
      const actualdata = await data.json();
      setMovieList(actualdata.results);
    };
    getData();
  }, [type]);

  return (
    <div className="container">
      <div className="movie_list">
        <h2 className="list_title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list_cards">
          {movieList.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
