import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "../styling/MovieListing.css";
import MovieDetail from "./MovieDetail";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [showDetail, setShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const onMovieClick = (id) => {
    console.log("id", id);
    setShowDetail(true);
    let filteredData = movies?.find((item) => item.id === id);
    console.log("filteredData", filteredData);
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
      </div>
    </div>
  );
};

export default MovieListing;
