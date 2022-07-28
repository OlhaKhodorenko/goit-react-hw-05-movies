import { NavLink } from 'react-router-dom';

const MovieList = ({ movies, prevLocation }) => {
  const addMovies = () =>
    movies.map(({ id, title }) => (
      <li key={id}>
        <NavLink to={`/movies/${id}`} state={{ from: prevLocation }}>
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
