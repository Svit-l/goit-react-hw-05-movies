import { NavLink, useParams, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import movies from '../../movies.json';
import movie from '../../oneMovie.json';

const POSTER_URL = 'https://image.tmdb.org/t/p/original/';
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=671e99770535147b22bbc4f5e6f1ab11&language=en-US

const Link = styled(NavLink)`
  color: #000000;
  &.active {
    color: #c40363;
    font-weight: 700;
    text-decoration: underline #c40363;
  }
`;

function getMovie(id) {
  return movies.find(movie => movie.id === id);
}

function OneMovie() {
  let navigate = useNavigate();
  let params = useParams();
  let movie = getMovie(parseInt(params.movieId, 10));

  const movieTitle = movie.title ? movie.title : movie.name;

  return (
    <div>
      <button type="button">{<Link to="/">Go to homepage</Link>}</button>
      <Outlet />
      <img
        src={POSTER_URL + movie['poster_path']}
        alt={movieTitle + ' poster'}
        width="200"
      />
      <div className="description">
        <h1>{movieTitle}</h1>
        <p>User vote average: {movie['vote_average']}</p>
        <div>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>{movie.genre_ids}</p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="/cast">Cast</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OneMovie;
