const apiKey = "fd2ee82";

export async function getMoviesByName(
  movieName,
  setMovieTitle,
  setPosterUrl,
  setRated,
  setRuntime,
  setGenre,
  setPlot,
  setActors,
  setRating
) {
  const result = await fetch(
    `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
  );
  const movie = await result.json();
  console.log(movie);
  setMovieTitle(movie.Title);
  setPosterUrl(movie.Poster);
  setRated(movie.Rated);
  setRuntime(movie.Runtime);
  setGenre(movie.Genre);
  setPlot(movie.Plot);
  setActors(movie.Actors);
  setRating(movie.imdbRating);
}

export const getMoviesByID = async (ID) => {
  const result = await fetch(
    `http://www.omdbapi.com/?i=${ID}&apikey=${apiKey}`
  );
  const movie = await result.json();
};

export const handleChange = (setInputValue) => {
  setInputValue(this.target.value)
}

export const onSubmit = (setRequestTitle, inputValue, setInputValue) => {
  this.preventDefault();
  setRequestTitle(convertString(inputValue))
  setInputValue("")
  // movieInput.focus();
}

export const convertString = (str) => {
  str = str.toLowerCase().replace(/\s+/g, "-");
  return str;
}