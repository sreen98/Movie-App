import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "../styling/MovieListing.css";
import MovieDetail from "./MovieDetail";
import Spinner from "react-bootstrap/Spinner";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const isloader = useSelector((state) => state.loader.loader);
  console.log("isloader", isloader);
  const [showDetail, setShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const onMovieClick = (id) => {
    setShowDetail(true);
    let filteredData = movies?.find((item) => item.id === id);
    setMovieDetail(filteredData);
  };
  const handleCloseClick = () => {
    setShowDetail(false);
    setMovieDetail({});
  };
  return (
    <div className="movie-wrapper">
      {showDetail ? (
        <MovieDetail
          show={showDetail}
          details={movieDetail}
          handleClose={handleCloseClick}
        />
      ) : null}
      <div className="movie-list">
        {isloader ? (
          <div className="loader">
            <Spinner />
          </div>
        ) : (
          <>
            <h2>Movies</h2>
            <div className="movie-container">
              {movies &&
                movies.length &&
                movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    data={movie}
                    handleClick={onMovieClick}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
