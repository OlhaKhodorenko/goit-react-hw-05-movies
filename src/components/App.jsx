import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const MoviesDetailes = lazy(() => import('../pages/MoviesDetailes'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review'));

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetailes />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
