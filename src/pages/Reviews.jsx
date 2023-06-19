import { getMovieReviews } from 'api/themovied_api';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from './Reviews.styled';

function Reviews() {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setIsloading(true);
      try {
        const result = await getMovieReviews(movieId);
        setMovieReviews(result.results);
        console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      <div>
        <h2>Reviews</h2>
        <ul>
          {Array.isArray(movieReviews) &&
            movieReviews.length > 0 &&
            movieReviews.map(({ id, author, content }) => {
              return (
                <ReviewsItem key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </ReviewsItem>
              );
            })}
        </ul>
      </div>
      {isLoading && <p>loading...</p>}
      {error.length > 0 && <p>{error}</p>}
    </>
  );
}

export default Reviews;
