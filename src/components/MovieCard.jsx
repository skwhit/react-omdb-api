import React from "react";

export default function MovieCard(props) {
  const { title, type, posterUrl } = props;
  return (
    <div className="movieCard">
      <div className="movieImgContainer">
        <img src={posterUrl} alt="batman" />
      </div>
      <div className="cardBody">
        <h3>{title}</h3>
        <button>Movie</button>
      </div>
    </div>
  );
}
