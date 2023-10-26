import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/slice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      // Add console.log to see if this block is executed
      console.log("Rendering movies...") ||
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      // Add console.log to see if this block is executed
      console.log("Rendering error message...") ||
      <div className="movies error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="Movie-wrapper">
      <div className="movieList">
        <h2>Movies</h2>
        <div className="movie-container">
          {/* Add console.log to see if this block is executed */}
          {console.log("Rendering movie container...") || renderMovies}
        </div>
      </div>
    </div>
  );
};


export default MovieListing;
