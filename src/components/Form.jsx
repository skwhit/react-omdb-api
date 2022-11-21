import React, { useEffect, useState } from "react";
import { convertString } from "../utils";
import PropTypes from "prop-types";
import "./form.css";

export default function Form(props) {
  const {
    setSearchTerm,
    currentPage,
    setCurrentPage,
    pageNumbers,
    setType,
    isLoading,
  } = props;

  const [inputValue, setInputValue] = useState("");

  let count = 0;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    setType(e.target.value);
  };

  const handlePageChange = (e) => {
    console.log(e);
    if (e.target.value > 0 && e.target.value <= pageNumbers)
      setCurrentPage(parseInt(e.target.value));
  };

  const onSubmit = (e) => {
    count++;
    e.preventDefault();
    setSearchTerm(convertString(inputValue));
    setInputValue("");
  };

  const pageBack = (e) => {
    e.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageForward = (e) => {
    e.preventDefault();
    if (currentPage !== pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleKeydown = (e) => {
    if (e.key === "ArrowLeft") {
      console.log(e);
      pageBack(e);
    }
    if (e.key === "ArrowRight") {
      pageForward(e);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  });

  return (
    <form className="inputContainer">
      <div className="searchBar">
        <input
          value={inputValue}
          type="text"
          className="movieInput"
          onChange={handleInputChange}
          autoFocus
          placeholder="Enter movie, series, episode, or game name..."
        />
        <select
          className="mediaType"
          name="mediaType"
          onChange={handleOptionChange}
        >
          <option value="">All Types</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
          <option value="game">Game</option>
        </select>
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
        {isLoading ? (
          <i className="fa-solid fa-volleyball fa-6x transition"></i>
        ) : (
          <></>
        )}
      </div>
      <div className="pagination">
        <p>
          <input
            className="pageInput"
            value={currentPage}
            type="text"
            onChange={handlePageChange}
            onClick={(e) => e.target.select()}
          />
          {` of ${pageNumbers}`}
        </p>
        <div className="pageButtons">
          <button onClick={pageBack} className="previousPage">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={pageForward} className="nextPage">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

Form.propTypes = {
  setSearchTerm: PropTypes.func,
};
