import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(setMovieReview);
  }, [movieId]);

  if (!movieReview) {
    return null;
  }

  console.log(movieReview);

  return (
    <div>
      {movieReview.length !== 0 ? (
        <ul>
          {movieReview.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>'{content}'</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;
