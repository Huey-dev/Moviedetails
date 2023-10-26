import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "./movies/slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducers,
  },
});
