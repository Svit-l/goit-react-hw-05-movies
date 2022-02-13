import { NavLink, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import OneMovie from '../OneMovie';

const Link = styled(NavLink)`
  color: #000000;
  &.active {
    color: #c40363;
    font-weight: 700;
    text-decoration: underline #c40363;
  }
`;

// const title = movies['original_title'];

function Movies({ movies }) {
  return (
    <>
      <input type="text" />
      <ul>
        {/* {movies.map(movie => {
          const { title, id } = movie;
          return (
            <li key={id}>
              <Link to="/movie">{title}</Link>
            </li>
          );
        })} */}

        <li>
          <Link to="/movies/movie1">Movie1</Link>
        </li>
        <li>
          <Link to="/movies/movie2">Movie2</Link>
        </li>
        <li>
          <Link to="/movies/movie3">Movie3</Link>
        </li>
      </ul>
    </>
  );
}

// CastList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
// };
export default Movies;
