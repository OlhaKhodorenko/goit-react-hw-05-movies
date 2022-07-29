import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';

const MoviesDetailes = () => {
  const { movieId } = useParams();
  const [movieCard, setMovieCard] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovieCard);
  }, [movieId]);

  if (!movieCard) {
    return null;
  }
  const {
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  } = movieCard;

  return (
    <main>
      <img
        src={movieCard && `https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={original_title}
      />
      <h2>
        {original_title}({release_date.slice(0, 4)})
      </h2>
      <p>User Score: {vote_average * 10}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres.map(genre => genre.name).join(',')}</p>
    </main>
  );
};
export default MoviesDetailes;
