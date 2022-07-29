import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'service/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
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
        console.log(error);
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
