import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import { useDispatch } from "react-redux";
import { sagaActions } from "../common/api/actions/sagaActions";
import { toggeleLoader } from "../common/api/actions/loaderSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggeleLoader(true));
    dispatch({ type: sagaActions.FETCH_ALL_MOVIES });
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
