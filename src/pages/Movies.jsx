import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <main>
      <h1>Movies</h1>
      <Outlet />
    </main>
  );
};
export default Movies;
