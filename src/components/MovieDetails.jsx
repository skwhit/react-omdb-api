import React from "react";
import PropTypes from "prop-types";
import "./movieDetails.css";

export default function MovieDetails(props) {
  const { posterUrl, title, rated, runtime, genre, plot, actors, rating } =
    props;
  return (
    <section className="movieDetails">
      <img src={posterUrl} alt={title} />
      <div className="detailsBody">
        <div className="heading">
          <h2>{title}</h2>
          <h2>{rating}</h2>
        </div>
        <div className="highlights">
          <button>{rated}</button>
          <button>{runtime}</button>
          <button>{genre}</button>
        </div>
        <div className="plot">
          <h3>Plot</h3>
          <p>{plot}</p>
        </div>
        <div className="Actors">
          <h3>Actors</h3>
          <p>{actors}</p>
        </div>
      </div>
    </section>
  );
}

MovieDetails.propTypes = {
  posterUrl: PropTypes.string,
  title: PropTypes.string,
  rated: PropTypes.string,
  runtime: PropTypes.string,
  genre: PropTypes.string,
  plot: PropTypes.string,
  actors: PropTypes.string,
  rating: PropTypes.string,
};
