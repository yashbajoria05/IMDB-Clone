import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={350} duration={3} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/IMDB_clone/movie/${movie.id}`} className="link">
          <div className="cards">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                movie && movie.poster_path
              }`}
              className="cards_img"
              alt={movie.original_title}
            />
            <div className="cards_overlay">
              <div className="cards_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="cards_runtime">
                {movie ? movie.release_date : ""}
                <span className="cards_rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="cards_description">
                {movie ? movie.overview.slice(0, 120) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
