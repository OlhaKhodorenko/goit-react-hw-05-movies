import { getMovieByQuery } from '../service/api.js';
import MovieList from 'components/MovieList';
import { SearchBox } from 'components/SearchBox';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query] = useState('');

  const handleSubmit = e => {
    error.preventDefault();
    if (!query || query.trim() === '') {
      alert('your query is empty.');
      return;
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);

    const searchMovies = async ({ title }) => {
      try {
        const foundMovies = await getMovieByQuery(searchQuery);
        if (foundMovies.length === 0) {
          console.log('There is no images found');
        }
        // const addedMovies = foundMovies.map(({ id, title }) => ({
        //   id,
        //   title,
        // }));
        setMovies([...foundMovies]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery !== '') {
      searchMovies(searchQuery);
    }
  }, [searchQuery, isloading]);

  // const visibleMovies = movies.results.filter(movie =>
  //   movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox
        value={searchQuery}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
      />
      {movies && <MovieList movies={movies} prevLocation={location} />}
    </main>
  );
};
export default Movies;
