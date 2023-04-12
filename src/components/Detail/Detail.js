import React from "react";
import "./Detail.css";

const Detail = ({
  movie: { title, genre, cast, poster, year, rating, director, storyline },
}) => (
  <div className="detail">
    <img src={poster} />
    <h1> {title} </h1>
    <p> {year} </p>
    <p> rating: {rating} </p>
    <p> director: {director} </p>
    <p> genre: {genre} </p>
    <h5> {storyline} </h5>
    <div className="cast">
      {cast.map(({ name, as }) => (
        <div>
          <h5> {name} </h5>
          <p>as</p>
          <h5> {as} </h5>
        </div>
      ))}
    </div>
  </div>
);

export default Detail;
