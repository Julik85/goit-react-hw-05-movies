import { getMovieCast } from 'api/themovied_api';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      setIsloading(true);
      try {
        const result = await getMovieCast(movieId);
        setMovieCast(result.cast);
        console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      <div>
        <h2>Cast</h2>
        <ul>
          {Array.isArray(movieCast) &&
            movieCast.length > 0 &&
            movieCast.map(castItem => {
              return <li key={castItem.id}>{castItem.character}</li>;
            })}
        </ul>
      </div>
      {isLoading && <p>loading...</p>}
      {error.length > 0 && <p>{error}</p>}
    </>
  );
}

export default Cast;
