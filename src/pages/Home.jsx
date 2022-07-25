import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'service/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const addMovies = async () => {
      try {
        const Movies = await getTrending();
        if (Movies.total_results === 0) {
          console.log('There is no images found');
        }
        const addedMovies = Movies.results.map(({ id, title }) => ({
          id,
          title,
        }));
        setMovies(addedMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    addMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} prevLocation={location} />
    </main>
  );
};
export default Home;
