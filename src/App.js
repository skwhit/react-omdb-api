import react, { useEffect, useState } from "react";
import "./App.css";
import { getMoviesByName, getMoviesByID, handleChange, onSubmit, convertString } from "./utils";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

function App() {
  console.clear();
  const [inputValue, setInputValue] = useState()
  const [requestTitle, setRequestTitle] = useState("batman-v-superman");
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
    requestTitle,
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

  let count;

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const onSubmit = (e) => {
    count ++;
    e.preventDefault();
    setRequestTitle(convertString(inputValue))
    setInputValue("")
  }
  
  const convertString = (str) => {
    str = str.toLowerCase().replace(/\s+/g, "-");
    return str;
  }

  return (
    <>
      <div className="titleContainer">
        <h1 className="pageTitle">React Movie App</h1>
        <form className="inputContainer">
          <p>Please input a movie</p>
          <input value={inputValue} type="text" className="movieInput" onChange={handleChange} autoFocus/>
          <button type="submit" onClick={onSubmit}>Submit <br />(press enter)</button>
        </form>
      </div>
      <MovieCard 
        title={movieTitle} 
        type="b" 
        posterUrl={posterUrl} 
      />
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
