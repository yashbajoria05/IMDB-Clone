import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovieList from "../../components/MovieList/MovieList";
import "./Home.css";

const Home = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const actualdata = await data.json();
      setPopular(actualdata.results);
      // console.log(actualdata.results);
    };
    getMovies();
  }, []);
  return (
    <>
      <div className="banner">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          autoFocus={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popular.map((movie) => (
            <Link to={`/movie/${movie.id}`} className="link">
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    movie && movie.backdrop_path
                  }`}
                  alt={movie.original_title}
                />
              </div>
              <div className="posterOverlay">
                <div className="poster_title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="poster_runtime">
                  {movie ? movie.release_date : ""}
                  <span className="poster_rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="poster_description">
                  {movie ? movie.overview.slice(0, 250) + "..." : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
