import React, { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";
import "./modal.css";

export default function Modal(props) {
  const { show, setModal, movie } = props;

  const onClose = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleKeydown = (e) => {
    console.log(e)
    if (e.key === "Escape") {
      onClose(e);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  });

  return (
    <>
      {show ? (
        <div className="modal-root">
          <div className="modal-container">
            <div className="close">
              <button onClick={onClose}>
                <i className="fa-solid fa-xmark fa-2x"></i>
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
