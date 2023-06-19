import { getTrendingMovies } from 'api/themovied_api';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { TrendingList } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setIsloading(true);
      try {
        const result = await getTrendingMovies();
        setMovies(result.results);
        
       
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div>
        <h1>Trendings</h1>
        <TrendingList>
          {Array.isArray(movies) &&
            movies.length > 0 &&
            movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                  <img className=" movie-poster"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="300"
                  height="450"/>
                   <p>{movie.title}</p>
                  </Link>
                </li>
              );
            })}
        </TrendingList>
      </div>
      {isLoading && <p>loading...</p>}
      {error.length > 0 && <p>{error}</p>}
    </>
  );
}

export default Home;
