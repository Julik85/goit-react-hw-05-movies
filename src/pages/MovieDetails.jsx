import { getMovieDetails } from 'api/themovied_api';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import Reviews from './Reviews';
import Cast from './Cast';

function MovieDetails() {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieData = async () => {
      setIsloading(true);
      try {
        const result = await getMovieDetails(movieId);
        setMovieData(result);
        console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);


  // const { title, overview} = movieData

  return (
    <>
      {movieData !== null && (
        <div>
          <h1>title: {movieData.title}</h1>
          <p>{movieData.overview}</p>
        </div>
      )}
      {isLoading && <p>loading...</p>}
      {error.length > 0 && <p>{error}</p>}
      <div>
        <ul>
         <li> <Link to={`cast`}> Cast</Link></li>
          <li><Link to={`reviews`}> Reviews</Link></li>    
        </ul>  
      </div>
      <div>
        <Routes>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews'element={<Reviews/>}/>
        </Routes>
      </div>
    </>
  );
}

export default MovieDetails;
