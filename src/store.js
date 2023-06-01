import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./actions/movieSlice";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./actions/saga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);
