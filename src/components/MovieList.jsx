import React from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

export default function MovieList(props) {
  const { movieList } = props;
  // console.log(movieList);
  return (
    <>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
        />
      ))}
    </>
  );
}

MovieCard.propTypes = {
  movieList: PropTypes.array,
};
