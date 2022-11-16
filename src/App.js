import react, { useEffect, useState } from "react";
import "./App.css";
import { getMovieByName, getMovieListByName, getMovieByID } from "./utils";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Form from "./components/Form";

function App() {
  const [searchterm, setSearchTerm] = useState("batman");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMovieListByName(searchterm, setMovies, setError, setIsLoading);
  }, [searchterm]);

  return (
    <>
      <section className="titleContainer">
        <h1 className="pageTitle">React Media App</h1>
        <Form setSearchTerm={setSearchTerm} />
      </section>
      <section className="moviesContainer">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <MovieList movieList={movies} />
        )}
      </section>
    </>
  );
}

export default App;
