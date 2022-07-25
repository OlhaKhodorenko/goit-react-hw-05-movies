import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import { Container, Header, Link } from './App.styled';
import MoviesDetailes from 'pages/MoviesDetailes';
//import AdditionalInfo from 'pages/AdditionalInfo';
import Credits from 'pages/Credits';
import Review from 'pages/Review';

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
          <Route path="credits" element={<Credits />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </Container>
  );
};
