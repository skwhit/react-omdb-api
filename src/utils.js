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

