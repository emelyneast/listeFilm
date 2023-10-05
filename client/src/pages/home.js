// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const apiKey = 'c8457fe75eed24cc0e29abb881bcc6b1';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // État pour stocker la requête de recherche

  useEffect(() => {
    // Fonction pour effectuer la recherche
    const performSearch = () => {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&language=fr-FR`)
        .then((response) => {
          const movieResults = response.data.results;
          setMovies(movieResults);
          console.log(movieResults);
        })
        .catch((err) => {
          setError(err);
        });
    };

    if (searchQuery) {
      performSearch(); // Effectuer la recherche lorsque la requête n'est pas vide
    }
  }, [searchQuery]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(e.target.value); // Déclencher la recherche lorsque l'utilisateur appuie sur "Entrée"
    }
  };

  if (error) {
    return <div>Erreur lors de la récupération des données.</div>;
  }

  return (
    <div>
      <h1>Rechercher des films :</h1>
      <input
        type="text"
        placeholder="Saisissez le titre du film..."
        onKeyPress={handleKeyPress}
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Date de sortie : {movie.release_date}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;