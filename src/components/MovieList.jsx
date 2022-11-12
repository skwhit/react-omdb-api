import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const { movieList } = props;
  // console.log(movieList);
  return (
    <>
      {movieList.map((movie) => (
        <MovieCard key={movie.title} title={movie.Title} type="b" posterUrl={movie.Poster} />
      ))}
    </>
  );
}
