import React from "react";
import { actors } from "../data";

function Actors() {

  function renderSingleActor(actor, index) {
    return (
      <div key={index}>
        <h3>{actor.name}</h3>
        <ul>
      
          {actor.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map((actor, index) => renderSingleActor(actor, index))}
    </div>
  );
}

export default Actors;
