import { useParams, Outlet } from 'react-router-dom';
import PageWrap from '../PageWrap';
import ButtonGoHome from '../ButtonGoHome';
import movies from '../../movies.json';

import styles from './OneMovieStyled';

const {
  MovieDataWrap,
  Link,
  Description,
  CastRewies,
  MovieImg,
  Title,
  LinkList,
  CastRewiesWrap,
} = styles;

const POSTER_URL = 'https://image.tmdb.org/t/p/original/';

function getMovie(id) {
  return movies.find(movie => movie.id === id);
}

function OneMovie() {
  // let navigate = useNavigate();
  // console.log(navigate);
  let params = useParams();
  let movie = getMovie(parseInt(params.movieId, 10));

  console.log(movie);
  const movieTitle = movie.title ? movie.title : movie.name;

  return (
    <PageWrap>
      <ButtonGoHome />

      <MovieDataWrap>
        <MovieImg
          src={POSTER_URL + movie['poster_path']}
          alt={movieTitle + ' poster'}
        />

        <Description>
          <Title>{movieTitle}</Title>
          <p>User vote average: {movie['vote_average']}</p>
          <div>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p>{movie.genre_ids}</p>
          </div>
        </Description>
      </MovieDataWrap>

      <CastRewies>
        <h2>Additional information</h2>
        <LinkList>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </LinkList>
      </CastRewies>

      <CastRewiesWrap>
        <Outlet />
      </CastRewiesWrap>
      <ButtonGoHome />
    </PageWrap>
  );
}

export default OneMovie;
