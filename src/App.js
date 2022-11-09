import react, {useEffect, useState} from "react"
import './App.css';
import {getMoviesByName, getMoviesByID} from './utils';
import MovieCard from './components/MovieCard';

function App() {
  console.clear();
  const [movieTitle, setMovieTitle] = useState()
  const [posterUrl, setPosterUrl] = useState()
  // const batman = getMoviesByName("batman");
  getMoviesByName("batman-v-superman", setMovieTitle, setPosterUrl);
  console.log(movieTitle)
  console.log(posterUrl)
  // setMovieTitle(batman.Title)
  return (
  <>
    <h1>React Movie App</h1>
    <MovieCard title={movieTitle} type="b" posterUrl={posterUrl} />
    
    {/* <MovieDetails /> */}
  </>
  );
}

export default App;
