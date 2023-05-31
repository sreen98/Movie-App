import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(
        (issue) => issue.id !== action.payload
      );
    },
  },
});

export const { addMovies, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
