import react, { useEffect, useState } from "react";
import "./App.css";
import {
  getMovieByName,
  getMovieListByName,
  getMovieByID,
  convertString,
} from "./utils";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

function App() {
  // console.clear();
  const [inputValue, setInputValue] = useState("");
  const [optionValue, setOptionValue] = useState("one");
  const [requestTitle, setRequestTitle] = useState("batman-v-superman");
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);

  // getMoviesByName("batman", setMovies)

  useEffect(() => {
    optionValue === "all movies" 
    ? getMovieListByName(requestTitle, setMovies) 
    : getMovieByName(requestTitle, setMovie);
    // setOptionValue("one");
  }, [requestTitle]);

  let count = 0;
  // console.log(movie);
  // console.log(movies);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    console.log(e);
    console.log("passed value:", e.target.value)
    setOptionValue(e.target.value)
  };

  useEffect(() => {
    console.log("setvalue:", optionValue)
  }, [optionValue])

  const onSubmit = (e) => {
    count++;
    e.preventDefault();
    setRequestTitle(convertString(inputValue));
    setInputValue("");
  };

  return (
    <>
      <section className="titleContainer">
        <h1 className="pageTitle">React Movie App</h1>
        <form className="inputContainer">
          <p>Please input a movie</p>
          <div>
            <input
              value={inputValue}
              type="text"
              className="movieInput"
              onChange={handleInputChange}
              autoFocus
            />
            <select onChange={handleOptionChange} value={optionValue}>
              <option selected  value={"all movies"}>All Movies</option>
              <option  value={"one movie"}>One Movie</option>
            </select>
          </div>
          <button type="submit" onClick={onSubmit}>
            Submit <br />
            (press enter)
          </button>
        </form>
      </section>
      <section className="moviesContainer">
        <MovieList movieList={movies} />
      </section>
      {/* <MovieDetails
          posterUrl={posterUrl}
          title={movieTitle}
          rated={rated}
          runtime={runtime}
          genre={genre}
          plot={plot}
          actors={actors}
          rating={rating}
        /> */}
    </>
  );
}

export default App;
