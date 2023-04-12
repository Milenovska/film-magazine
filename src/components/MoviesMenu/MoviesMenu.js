import React from "react";
import "./MoviesMenu.css";

const MoviesMenu = ({ movies, handleSelect, selectedId }) => (
  <div className="movies-menu">
    {movies.map((movie) => (
      <button
        className={`${selectedId === movie.id ? "selected-movie" : ""}`}
        onClick={() => handleSelect(movie)}
      >
        {" "}
        {movie.title}{" "}
      </button>
    ))}
  </div>
);

export default MoviesMenu;
