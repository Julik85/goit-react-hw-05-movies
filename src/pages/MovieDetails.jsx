import { getMovieDetails } from 'api/themovied_api';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Routes, Route, useParams, useLocation } from 'react-router-dom';
import Reviews from './Reviews';
import Cast from './Cast';
import { MovieDetailsList, MovieDetailsOverview, MovieDetailsTitle, MovieDetailsWrapp } from './MovieDetails.styled';




function MovieDetails() {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location.state?.from;
  
  console.log('movieData:', movieData);
  
  
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setIsloading(true);
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

  

 
  
  return (
    
    <>
      {movieData !== null && (
        <MovieDetailsWrapp>
          <MovieDetailsTitle>{movieData.title}</MovieDetailsTitle>
          <img className=" movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
            width="300"
            height="450"/>
          <MovieDetailsOverview>{movieData.overview}</MovieDetailsOverview>
        </MovieDetailsWrapp>
      )}
      {isLoading && <p>loading...</p>}
      {error.length > 0 && <p>{error}</p>}
      <div>
        <MovieDetailsList>
         <li> <Link to={`cast`}> Cast</Link></li>
          <li><Link to={`reviews`}> Reviews</Link></li>
          <li><Link className='back-menu' to={backLink ?? '/'}>Back</Link></li>    
        </MovieDetailsList>  
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
