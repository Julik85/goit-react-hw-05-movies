import { getMovieCast } from 'api/themovied_api';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

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
        <CastList>
          {Array.isArray(movieCast) &&
            movieCast.length > 0 &&
            movieCast.map(castItem => {
              const actorPhoto = `https://image.tmdb.org/t/p/w500/${castItem.profile_path}`
              return <li key={castItem.id}>
              <img src={actorPhoto} alt={castItem.name} width="200"
                  height="300"/>
                  <p>{castItem.character}</p>
                  <p>{castItem.name}</p></li>;
            })}
        </CastList>
      </div>
      {isLoading && <p>loading...</p>}
      {error.length > 0 && <p>{error}</p>}
    </>
  );
}

export default Cast;
