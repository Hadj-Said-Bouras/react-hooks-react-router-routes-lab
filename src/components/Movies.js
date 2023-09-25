import React from "react";
import { movies } from "../data";

function Movies() {
  function renderSingleMovie(movie, index) {
    return (
      <div key={index}>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <ul>
          {movie.genres.map((genre, genreIndex) => (
            <li key={genreIndex}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => renderSingleMovie(movie, index))}
    </div>
  );
}

export default Movies;
