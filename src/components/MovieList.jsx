import { NavLink } from 'react-router-dom';

const MovieList = ({ movies, location }) => {
  const addMovies = () =>
    movies.map(({ id, title }) => (
      <li key={id}>
        <NavLink to={`/movies/${id}`} state={{ from: location }}>
          {title}
        </NavLink>
      </li>
    ));

  return (
    <div>
      <ul>{movies ? addMovies() : null}</ul>
    </div>
  );
};
export default MovieList;
