import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import Spinner from "react-bootstrap/Spinner";
import "../styling/MovieListing.css";
import MovieDetail from "./MovieDetail";
import MovieForm from "./MovieForm";
import { sagaActions } from "../actions/sagaActions";
import {
  toggleShowForm,
  toggleisEdit,
  setEditDetail,
} from "../actions/movieSlice";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const showForm = useSelector((state) => state.movies.showForm);
  const showLoader = useSelector((state) => state.movies.isLoader);
  const dispatch = useDispatch();
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
  const handleFormClose = () => {
    dispatch(toggleShowForm(false));
    dispatch(toggleisEdit(true));
    dispatch(setEditDetail({}));
  };
  const onAddClick = () => {
    dispatch(toggleShowForm(true));
  };
  const handleDelete = (id) => {
    dispatch({ type: sagaActions.DELETE_MOVIE, payload: id });
  };
  return (
    <div className="movie-wrapper">
      {showLoader ? (
        <>
          <div className="loader">
            <Spinner />
          </div>
        </>
      ) : (
        <>
          {showDetail ? (
            <MovieDetail
              show={showDetail}
              details={movieDetail}
              handleClose={handleCloseClick}
              handleDeleteButton={handleDelete}
            />
          ) : null}
          {showForm ? (
            <MovieForm handleFormClose={handleFormClose} show={showForm} />
          ) : null}
          <div className="movie-list">
            <div>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListing;
