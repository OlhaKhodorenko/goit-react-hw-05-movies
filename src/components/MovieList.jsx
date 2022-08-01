import { NavLink } from 'react-router-dom';
import { Link } from './MovieList.styled';

const MovieList = ({ movies, location }) => {
  const addMovies = () =>
    movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title}
        </Link>
      </li>
    ));

  return (
    <div>
      <ul>{movies ? addMovies() : null}</ul>
    </div>
  );
};
export default MovieList;
