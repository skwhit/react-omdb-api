const apiKey = "fd2ee82";

export async function getMoviesByName(movieName, setMovieTitle, setPosterUrl) {
 
    const result = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
    );
    const movie = await result.json();
    setMovieTitle(movie.Title);
    setPosterUrl(movie.Poster);
    // console.log(movie)
    // return movie;
    
};

console.log(getMoviesByName("batman"));

export const getMoviesByID = async (ID) => {
    const result = await fetch(
      `http://www.omdbapi.com/?i=${ID}&apikey=${apiKey}`
    );
    const movie = await result.json();
    return movie;
  };