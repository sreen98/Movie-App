import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  showForm: false,
  isEdit: false,
  editDetail: {},
  isLoader: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getAllMovies: (state, action) => {
      state.movies = action.payload;
    },
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    editMovie: (state, action) => {
      let editData = action.payload;
      state.movies = state.movies.map((item) => {
        if (item.id === editData.id) return editData;
        else return item;
      });
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((item) => item.id !== action.payload);
    },
    toggleShowForm: (state, action) => {
      state.showForm = action.payload;
    },
    toggleisEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setEditDetail: (state, action) => {
      state.editDetail = action.payload;
    },
    toggleLoader: (state, action) => {
      state.isLoader = action.payload;
    },
  },
});

export const {
  getAllMovies,
  addMovie,
  editMovie,
  deleteMovie,
  toggleShowForm,
  toggleisEdit,
  setEditDetail,
  toggleLoader,
} = movieSlice.actions;
export default movieSlice.reducer;
