import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import { apiKey } from "../../common/api/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/slice";

const Home = () => {
  // will change later
  const movieText = "harry";
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${apiKey}&s=${movieText}&type=movie`
      );
      dispatch(addMovies(response.data))
    };
    fetchMovies();
  }, []);

  return (
    <div className="home_container">
      <div className="bannerImg"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
