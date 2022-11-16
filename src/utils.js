const apiKey = `${process.env.REACT_APP_API_KEY}`;

export async function getMovieByName(searchTerm, setMovie) {
  const result = await fetch(
    `http://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`
  );
  const movie = await result.json();
  console.log(movie);
  setMovie(movie.Title);
}

export async function getMovieListByName(searchTerm,setMovies,setError,setIsLoading) {
  try {
    const result = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
    );
    const movies = await result.json();
    console.log(movies);
    setMovies(movies.Search);
    setError(null);
    setIsLoading(false);
  } catch (err) {
    setError(err.message);
    setMovies([]);
    setIsLoading(false);
  }
}

export const getMoviesByID = async (ID) => {
  const result = await fetch(
    `http://www.omdbapi.com/?i=${ID}&apikey=${apiKey}`
  );
  const movie = await result.json();
};

export const convertString = (str) => {
  str = str.toLowerCase().replace(/\s+/g, "-");
  return str;
};
