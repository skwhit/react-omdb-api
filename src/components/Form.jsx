import React, { useEffect, useState } from "react";
import { convertString } from "../utils";
import PropTypes from "prop-types";
import "./form.css";

export default function Form(props) {
  const { setSearchTerm, currentPage, setCurrentPage, pageNumbers } = props;

  const [inputValue, setInputValue] = useState("");

  let count = 0;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
  }

  const pageForward = (e) => {
    e.preventDefault();
    if (currentPage !== pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <form className="inputContainer">
      <div className="searchBar">
        <input
          value={inputValue}
          type="text"
          className="movieInput"
          onChange={handleInputChange}
          autoFocus
          placeholder="Enter movie, series, or episode name..."
        />
        <select className="mediaType" name="mediaType">
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </div>
      <div className="pagination">
        <p>{`${currentPage} of ${pageNumbers}`}</p>
        <button onClick={pageBack} className="previousPage"><i className="fa-solid fa-chevron-left"></i></button>
        <button onClick={pageForward} className="nextPage"><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </form>
  );
}

Form.propTypes = {
  setSearchTerm: PropTypes.func,
};
