import axios from 'axios';
import settings from './settings';

const { KEY, BASE_URL } = settings;

export const getTrending = async page => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return response.data;
};

export const getMovieByQuery = async (serchQuery, page) => {
  const foundMovies = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1`
  );
  return foundMovies.data;
};

export const fetchMovieDetails = async id => {
  const movieDetails = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${KEY}`
  );
  return movieDetails.data;
};

export const fetchMovieCredits = async id => {
  const movieDetailsCredits = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  );
  return movieDetailsCredits.data;
};

export const fetchReviews = async id => {
  const movieReview = await axios.get(
    `${BASE_URL}/movie/${id}//reviews?api_key=${KEY}&page=1`
  );
  return movieReview.data;
};
