import react, { useEffect, useState } from "react";
import "./App.css";
import { getMovieByName, getMovieListByName, getMovieByID } from "./utils";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Form from "./components/Form";

function App() {
  const [requestTitle, setRequestTitle] = useState("batman");
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // optionValue === "all movies"
    getMovieListByName(requestTitle, setMovies);
    // : getMovieByName(requestTitle, setMovie);
    // setOptionValue("one");
  }, [requestTitle]);

  return (
    <>
      <section className="titleContainer">
        <h1 className="pageTitle">React Movie App</h1>
        <Form setRequestTitle={setRequestTitle} />
      </section>
      <section className="moviesContainer">
        <MovieList movieList={movies} />
      </section>
    </>
  );
}

export default App;
