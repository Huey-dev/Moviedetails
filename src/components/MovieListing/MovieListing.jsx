import React from "react";
import Slider from "react-slick";
import { settings } from "../../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/slice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True"
      ? // Add console.log to see if this block is executed
        console.log("Rendering movies...") ||
        movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      : // Add console.log to see if this block is executed
        console.log("Rendering error message...") || (
          <div className="movies error">
            <h3>{movies.Error}</h3>
          </div>
        );

  renderShows =
    shows.Response === "True"
      ? // Add console.log to see if this block is executed
        console.log("Rendering movies...") ||
        shows.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      : // Add console.log to see if this block is executed
        console.log("Rendering error message...") || (
          <div className="movies error">
            <h3>{shows.Error}</h3>
          </div>
        );

  return (
    <div className="Movie-wrapper">
      <div className="movieList">
        <h2>Movies</h2>
        <div className="movie-container">
          {/* Add console.log to see if this block is executed */}
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="showList">
        <h2>Shows</h2>
        <div className="shows-container">
          {/* Add console.log to see if this block is executed */}
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
