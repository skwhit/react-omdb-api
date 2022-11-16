import React from "react";
import PropTypes from "prop-types";

export default function MovieCard(props) {
  const { title, type, posterUrl } = props;
  return (
    <div className="movieCard">
      <div className="movieImgContainer">
        <img src={posterUrl} alt="batman" />
      </div>
      <div className="cardBody">
        <h3>{title}</h3>
        <button>Details</button>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  posterUrl: PropTypes.string,
};
