import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';
import {
  Wrapper,
  Button,
  InfoContainer,
  AdditonalInfoContainer,
} from './MovieDetailes.styled';
import { BsArrowLeft } from 'react-icons/bs';

const MoviesDetailes = () => {
  const { movieId } = useParams();
  const [movieCard, setMovieCard] = useState(null);
  const location = useLocation();

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

  const toBackLink = location.state?.from ?? '/';

  return (
    <main>
      <nav>
        <Link to={toBackLink}>
          <Button>
            <BsArrowLeft />
            Go back
          </Button>
        </Link>
      </nav>
      <Wrapper>
        <img
          src={movieCard && `https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />
        <InfoContainer>
          <h2>
            {original_title}({release_date.slice(0, 4)})
          </h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(genre => genre.name).join(',')}</p>
        </InfoContainer>
      </Wrapper>
      <AdditonalInfoContainer>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </AdditonalInfoContainer>
      <Outlet />
    </main>
  );
};
export default MoviesDetailes;
