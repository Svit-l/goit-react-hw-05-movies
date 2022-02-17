import {
  useLocation,
  NavLink,
  Outlet,
  // useSearchParams,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from '../Movies/MoviesStyled';

import movies from '../../movies.json';
console.log(movies);

const { Link, MovieListItem } = styles;

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <Link to={to + location.search} {...props} />;
}

function HomePage() {
  return (
    <>
      <Outlet />
      <nav>
        {movies.map(movie => {
          const { id, title, name } = movie;
          return (
            <MovieListItem key={id}>
              <QueryNavLink to={`/movies/${id}`}>
                {title ? title : name}
              </QueryNavLink>
            </MovieListItem>
          );
        })}
      </nav>
    </>
  );
}

export default HomePage;
