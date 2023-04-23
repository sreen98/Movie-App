import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    toggeleLoader: (state, action) => {
      console.log("toggeleLoader reducer", action.payload);
      state.loader = action.payload;
    },
  },
});

export const { toggeleLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
