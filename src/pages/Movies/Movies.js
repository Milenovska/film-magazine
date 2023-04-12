import React, { useState } from "react";
import "./Movies.css";
import MoviesMenu from "../../components/MoviesMenu";
import Detail from "../../components/Detail";
import movies from "../../movie-database";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <h1>Movies</h1>
      <div className="movies">
        <MoviesMenu
          selectedId={selectedMovie.id}
          movies={movies}
          handleSelect={handleSelect}
        />
        <Detail movie={selectedMovie} />
      </div>
    </>
  );
};

export default Movies;
