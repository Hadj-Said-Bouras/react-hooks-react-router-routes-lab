import React from "react";
import { directors } from "../data";

function Directors() {
  function renderSingleDirector(director, directorIndex) {
    return (
      <div key={directorIndex}>
        <h3>{director.name}</h3>
        <ul>
    
          {director.movies.map((movie, movieIndex) => (
            <li key={movieIndex}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h1>Directors Page</h1>
  
      {directors.map((director, index) => (
        renderSingleDirector(director, index)
      ))}
    </div>
  );
}


export default Directors;


