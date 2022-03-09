import React from "react";

const MovieCard = ({ movie_Year, movie_Poster, movie_Type, movie_Title }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie_Year}</p>
      </div>
      <div>
        <img
          src={
            movie_Poster !== "N/A"
              ? movie_Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie_Title}
        />
      </div>
      <div>
        <span>{movie_Type}</span>
        <h3>{movie_Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
