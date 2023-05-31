import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import "../styling/MovieListing.css";
import MovieDetail from "./MovieDetail";
import Spinner from "react-bootstrap/Spinner";
import MovieForm from "./MovieForm";
import { sagaActions } from "../common/api/actions/sagaActions";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const isloader = useSelector((state) => state.loader.loader);
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [showForm, setShowForm] = useState(false);
  const onMovieClick = (id) => {
    setShowDetail(true);
    let filteredData = movies?.find((item) => item.id === id);
    setMovieDetail(filteredData);
  };
  const handleCloseClick = () => {
    setShowDetail(false);
    setMovieDetail({});
  };
  const handleFormClose = () => {
    setShowForm(false);
  };
  const onAddClick = () => {
    setShowForm(true);
  };
  const handleDelete = (id) => {
    dispatch({ type: sagaActions.DELETE_MOVIE, payload: id });
  };
  return (
    <div className="movie-wrapper">
      {showDetail ? (
        <MovieDetail
          show={showDetail}
          details={movieDetail}
          handleClose={handleCloseClick}
          handleDeleteButton={handleDelete}
        />
      ) : null}
      {showForm ? <MovieForm handleFormClose={handleFormClose} /> : null}
      <div className="movie-list">
        {isloader ? (
          <div className="loader">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="subheader">
              <h2>Movies</h2>
              <button className="addButton" onClick={onAddClick}>
                Add Movie
              </button>
            </div>

            <div className="movie-container">
              {movies?.length &&
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
