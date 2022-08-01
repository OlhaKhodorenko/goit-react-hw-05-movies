import { getMovieByQuery } from '../service/api.js';
import MovieList from 'components/MovieList';
import { SearchBox } from 'components/SearchBox';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
  const [movies, setMovies] = useState([]);
  //const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('your query is empty.');
      return;
    }
  };
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    //setIsLoading(true);

    const searchMovies = async ({ title }) => {
      try {
        const foundMovies = await getMovieByQuery(searchQuery);
        if (foundMovies.length === 0) {
          console.log('There is no movies found');
        }
        setMovies([...foundMovies]);
      } catch (error) {
        setError(error);
      } finally {
        // setIsLoading(false);
      }
    };
    if (searchQuery !== '') {
      searchMovies(searchQuery);
    }
  }, [searchQuery]);
  //, isloading
  // const visibleMovies = movies.results.filter(movie =>
  //   movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <main>
      <SearchBox
        value={searchQuery}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
      />
      {movies && <MovieList movies={movies} location={location} />}
    </main>
  );
};
export default Movies;
