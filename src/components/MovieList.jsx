import React from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

export default function MovieList(props) {
  const { movieList, setModal, setModalMovie } = props;
  // console.log(movieList);
  return (
    <>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
          imdbID={movie.imdbID}
          setModal={setModal}
          setModalMovie={setModalMovie}
        />
      ))}
    </>
  );
}

MovieCard.propTypes = {
  movieList: PropTypes.array,
};
