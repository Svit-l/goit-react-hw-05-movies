import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  color: #000000;
  &.active {
    color: #c40363;
    font-weight: 700;
    text-decoration: underline #c40363;
  }
`;

function OneMovie(poster, title, userScore, overview, genres) {
  return (
    <div>
      <button type="button">Go to homepage{<Link to="/"></Link>}</button>
      <img src="../../../public/logo512.png" alt={title + 'poster'} />
      <div className="description">
        <h1>{title}</h1>
        <p>User score:{userScore}</p>
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="/cast">Cast</Link>
          </li>
          <li>
            Reviews
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OneMovie;
