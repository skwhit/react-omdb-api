const apiKey = "fd2ee82";

export async function getMovieByName(requestTitle, setMovie) {
  const result = await fetch(
    `https://www.omdbapi.com/?t=${requestTitle}&apikey=${apiKey}`
  );
  const movie = await result.json();
  console.log(movie);
  setMovie(movie.Title);
}

export async function getMovieListByName(requestTitle, setMovies) {
  const result = await fetch(
    `https://www.omdbapi.com/?s=${requestTitle}&apikey=${apiKey}`
  );
  const movies = await result.json();
  console.log(movies);
  setMovies(movies.Search);
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
