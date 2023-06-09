import React, { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './assets/search.svg';
import MovieCard from './MovieCard';

const API_URL = "https://www.omdbapi.com?apikey=962bcb36";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //setMovies();
  }, [searchTerm])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="App">
      <h1>FlimZilla 🎬</h1>


      <div className="search">
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress} />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <div>
                <MovieCard movie={movie} />
              </div>

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found 🥺</h2>
          </div>
        )
      }

    </div>
  )
}

export default App