import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./common/api/actions/movieSlice";
import loaderSlice from "./common/api/actions/loaderSlice";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./common/api/actions/saga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    loader: loaderSlice,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);
