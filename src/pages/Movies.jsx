import { getMoviesBySearch } from 'api/themovied_api';
import { Loader } from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import { SearchGallery } from 'components/SearchGallery/SearchGallery';
import { Notify } from 'notiflix';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const [message, setMessage] = useState('Enter name of movie');
  const { query = '', page = '1' } = params;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;

    const fetchMoviesBySearch = async () => {
      try {
        setIsLoading(true);
        const { results, total_results, total_pages } = await getMoviesBySearch(
          'search/movie',
          page,
          query
        );
        
        if (Number(page) === 1) {
          if (total_results > 0) {
            Notify.success(`Founded ${total_results} for "${query}"`);
            setMessage(`Founded ${total_results} for "${query}"`);
          } else {
            Notify.warning(`Founded nothing for "${query}"`);
            setMessage(`Founded nothing for "${query}"`);
          }
        } else {
          setMessage(`Page ${Number(page)} of ${total_pages} for "${query}"`);
        }
        console.log('results:', results);  
        console.log(total_results);
        console.log(total_pages);
        setMovies([...results]);      
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesBySearch();
  }, [page, query]);

  const handleSubmit = inputQery => {
    if (inputQery.toLowerCase() === query.toLowerCase()) {
      Notify.warning(`You are alredy viewing results for "${query}" `);
      return;
    }
    setSearchParams({ query: inputQery, page: '1' });
    setMovies([]);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} message={message} />
      {isLoading && <Loader />}
      {Boolean (error.length) > 0 && <p>{error}</p>}
      {movies.length>0 && (
        <SearchGallery movies={movies} pageTitle={`Movies for "${query}"`} />

      )}
    </>
  );
};

export default Movies;
