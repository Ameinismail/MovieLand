import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=112ee7e9";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getMovies = async (title) => {
    const resp = await fetch(`${API_URL}&s=${title}`);
    const data = await resp.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <img
          src={SearchIcon}
          alt="searchIcon"
          onClick={() => getMovies(searchTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return (
              <MovieCard
                movie_Year={movie.Year}
                movie_Poster={movie.Poster}
                movie_Type={movie.Type}
                movie_Title={movie.Title}
                key={movie.imdbID}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>NO MOVIES FOUND</h2>
        </div>
      )}
    </div>
  );
}

export default App;
