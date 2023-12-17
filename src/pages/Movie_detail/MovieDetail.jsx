import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setMovieDetail(data));
    };
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="movie">
      <div className="movie__intro">
        <div className="movie_gradient"></div>
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            movieDetail &&
            (movieDetail.backdrop_path || movieDetail.poster_path)
          }`}
          alt="backdrop_img"
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                movieDetail ? movieDetail.poster_path : ""
              }`}
              alt="poster_img"
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {movieDetail ? movieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {movieDetail ? movieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {movieDetail ? movieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie__voteCount">
                {movieDetail ? "(" + movieDetail.vote_count + ") Votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {movieDetail ? movieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {movieDetail ? "Release Date: " + movieDetail.release_date : ""}
            </div>
            <div className="movie__genres">
              {movieDetail && movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div className="synopsisDescrip">
              {movieDetail ? movieDetail.overview : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {movieDetail && movieDetail.homepage && (
          <a
            href={movieDetail.homepage}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {movieDetail && movieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movieDetail.imdb_id}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      {movieDetail && movieDetail.production_companies ? (
        <div className="movie__heading1">Production Companies</div>
      ) : (
        ""
      )}
      <div className="movie__production">
        {movieDetail &&
          movieDetail.production_companies &&
          movieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyBg">
                  <span className="productionCompanyImage">
                    <img
                      className="movie__productionComapany"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                      alt="img"
                    />
                    <span className="productionCompanyTitle">
                      {company.name}
                    </span>
                  </span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default MovieDetail;
