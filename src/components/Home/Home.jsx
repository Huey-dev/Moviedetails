import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import { apiKey } from "../../common/api/movieApiKey";

const Home = () => {
  const movieText = "harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${apiKey}&s=${movieText}&type=movie`
      );
      console.log(response);
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
