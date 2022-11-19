import React, { useState } from "react";
import PropTypes from "prop-types";
import "./movieCard.css";
import { getMoviesByID } from "../utils";

export default function MovieCard(props) {
  const { title, type, posterUrl, imdbID, setModal, setModalMovie } = props;

  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => {
    setModal(true);
    setIsLoading(true);
    getMoviesByID(imdbID, setModalMovie, setIsLoading);
  };

  return (
    <div className="movieCardContainer">
      <div className="movieCard">
        <div className="movieImgContainer">
          <img src={posterUrl} alt="batman" />
        </div>
        <div className="cardBody">
          <h3>{title}</h3>
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
