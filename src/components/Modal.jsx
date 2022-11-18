import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
import "./modal.css";

export default function Modal(props) {
  const { show, setModal, movie } = props;

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      {show ? (
        <div className="modal-root">
          <div className="modal-container">
            <div className="close">
              <button onClick={onClose}>
                <i class="fa-solid fa-xmark fa-2x"></i>
              </button>
            </div>
            <MovieDetails
              posterUrl={movie.Poster}
              title={movie.Title}
              rated={movie.Rated}
              runtime={movie.Runtime}
              genre={movie.Genre}
              plot={movie.Plot}
              actors={movie.Actors}
              rating={movie.imdbRating}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
