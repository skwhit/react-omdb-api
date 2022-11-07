import './App.css';
import {getMoviesByName} from './utils';
import MovieCard from './movieCard';

function App() {
  console.clear();
  console.log(getMoviesByName("spider-man"))
  return (
  <>
    <h1>Hello World</h1>
    <MovieCard title="a" type="b" posterUrl="c" />
  </>
  );
}

export default App;
