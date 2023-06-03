import { getTrendingMovies } from 'api/themovied_api';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

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
        console.log(result);
       
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
        <ul>
          {Array.isArray(movies) &&
            movies.length > 0 &&
            movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}> title: {movie.title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
      {isLoading && <p>loading...</p>}
      {error.length > 0 && <p>{error}</p>}
    </>
  );
}

export default Home;
