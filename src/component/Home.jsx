import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import movieApi from "../common/api/movieApi";
import { APIKEY } from "../common/api/MovieApiKey";
import { addMovies } from "../features/movies/movieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`/movie?api_key=${APIKEY}`);
      dispatch(addMovies(response.data.results));
    };
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
