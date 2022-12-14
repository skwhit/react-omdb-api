import React, { useState } from "react";
import PropTypes from "prop-types";
import "./movieCard.css";
import { getMoviesByID } from "../utils";

export default function MovieCard(props) {
  const { title, type, posterUrl, imdbID, setModal, setModalMovie } = props;

  const [isLoading, setIsLoading] = useState(false);

  let movieTitle = title;
  if (movieTitle.length > 53) {
    movieTitle = movieTitle.substring(0, 50) + "...";
  }

  const toggleModal = () => {
    setModal(true);
    getMoviesByID(imdbID, setModalMovie, setIsLoading);
  };

  return (
    <div className="movieCardContainer">
      <div className="movieCard">
        <div className="movieImgContainer">
          <img src={posterUrl} alt="batman" />
        </div>
        <div className="cardBody">
          <h3 name={type}>{movieTitle}</h3>
          <button onClick={toggleModal} className="detailsButton" type="submit">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  posterUrl: PropTypes.string,
};
