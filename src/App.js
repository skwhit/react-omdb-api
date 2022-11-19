import react, { useEffect, useState } from "react";
import "./App.css";
import { getMovieByName, getMovieListByName, getMovieByID } from "./utils";
import MovieList from "./components/MovieList";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  const [searchterm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalMovie, setModalMovie] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getMovieListByName(searchterm, setMovies, setError, setIsLoading, currentPage, setPageNumbers);
  }, [searchterm, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchterm]);

  return (
    <div className="app">
      <Modal show={modal} setModal={setModal} movie={modalMovie} />
      <section className="titleContainer">
        <h1 className="pageTitle">React Media App</h1>
        <Form setSearchTerm={setSearchTerm} currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} />
      </section>
      <section className="moviesContainer">
        {searchterm === "" ? (
          <></>
        ) : isLoading ? (
          <i className="fa-solid fa-volleyball fa-6x transition"></i>
        ) : error ? (
          <h1 className="error">{error}</h1>
        ) : (
          <MovieList
            movieList={movies}
            setModal={setModal}
            setModalMovie={setModalMovie}
          />
        )}
      </section>
    </div>
  );
}

export default App;
