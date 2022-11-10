import react, { useEffect, useState } from "react";
import "./App.css";
import { getMoviesByName, getMoviesByID } from "./utils";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

function App() {
  console.clear();
  const [movieTitle, setMovieTitle] = useState();
  const [posterUrl, setPosterUrl] = useState();
  const [rated, setRated] = useState();
  const [runtime, setRuntime] = useState();
  const [genre, setGenre] = useState();
  const [plot, setPlot] = useState();
  const [actors, setActors] = useState();
  const [rating, setRating] = useState();

  // const batman = getMoviesByName("batman");
  getMoviesByName(
    "batman-v-superman",
    setMovieTitle,
    setPosterUrl,
    setRated,
    setRuntime,
    setGenre,
    setPlot,
    setActors,
    setRating
  );
  console.log(movieTitle);
  console.log(posterUrl);
  // setMovieTitle(batman.Title)
  return (
    <>
      <h1 className="pageTitle">React Movie App</h1>
      <MovieCard title={movieTitle} type="b" posterUrl={posterUrl} />

      <MovieDetails
        posterUrl={posterUrl}
        title={movieTitle}
        rated={rated}
        runtime={runtime}
        genre={genre}
        plot={plot}
        actors={actors}
        rating={rating}
      />
    </>
  );
}

export default App;
