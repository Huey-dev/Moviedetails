import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/slice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const seriesText = "friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
  }, [dispatch]);

  return (
    <div className="home_container">
      <div className="bannerImg"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
