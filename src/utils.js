const apiKey = "fd2ee82";

export const getMoviesByName = async (movieName) => {
  const result = await fetch(
    `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
  );
  const movie = await result.json();
  console.log(movie);
};

export const getMoviesByID = async (ID) => {
    const result = await fetch(
      `http://www.omdbapi.com/?i=${ID}&apikey=${apiKey}`
    );
    const movie = await result.json();
    console.log(movie);
  };