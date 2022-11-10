import React from "react";

export default function MovieCard(props) {
  const { title, type, posterUrl } = props;
  return (
    <div className="movieCard">
      <img src={posterUrl} alt="batman" />
      <div className="cardBody">
        <h3>{title}</h3>
        <button>Movie</button>
      </div>
    </div>
  );
}
