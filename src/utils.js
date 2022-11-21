const apiKey = `${process.env.REACT_APP_API_KEY}`;

export async function getMovieByName(searchTerm, setMovie) {
  const result = await fetch(
    `https://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`
  );
  const movie = await result.json();
  console.log(movie);
  setMovie(movie.Title);
}
export async function getMovieListByName(
  searchTerm,
  setMovies,
  setError,
  setIsLoading,
  currentPage,
  setPageNumbers,
  type,
  searchCount
) {
  try {
    const result = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}&page=${currentPage}&type=${type}`
    );
    const movies = await result.json();
    console.log(movies);
    console.log(movies.Search);

    if (searchCount === 0) setError("");
    else if (movies.Search === undefined)
      setError("No results found. Please try again.");
    else {
      setMovies(movies.Search);
      setPageNumbers(Math.ceil(movies.totalResults / 10));
      setError(null);
    }
    setIsLoading(false);
  } catch (err) {
    console.log(err.message);
    setError(err.message);
    setMovies([]);
    setIsLoading(false);
  }
}

export const getMoviesByID = async (ID, setModalMovie, setIsLoading) => {
  const result = await fetch(
    `https://www.omdbapi.com/?i=${ID}&apikey=${apiKey}`
  );
  const movie = await result.json();
  console.log(movie);
  setModalMovie(movie);
  setIsLoading(false);
};

export const convertString = (str) => {
  str = str.toLowerCase().replace(/\s+/g, "-");
  return str;
};
