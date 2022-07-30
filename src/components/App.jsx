//import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import { Container, Header, Link } from './App.styled';
import MoviesDetailes from 'pages/MoviesDetailes';
import Cast from 'components/Cast';
import Review from 'components/Review';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetailes />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </Container>
  );
};
