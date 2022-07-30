import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'service/api';
import { Image } from 'react-img-placeholder';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCastList);
  }, [movieId]);

  if (!castList) {
    return null;
  }

  return (
    castList && (
      <ul>
        {castList.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
              alt={name}
              width={100}
              height={150}
              placeholderColor="pink"
            ></Image>
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    )
  );
};
export default Cast;
