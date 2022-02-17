import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './MoviesStyled';

import movies from '../../movies.json';
console.log(movies);

const { Link, MovieListItem } = styles;

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <Link to={to + location.search} {...props} />;
}

function Movies() {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <>
      <button type="button">{<NavLink to="/">Go to homepage</NavLink>}</button>

      <input
        value={searchParams.get('filter') || ''}
        onChange={event => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter }, { replace: true });
          } else {
            setSearchParams({}, { replace: true });
          }
        }}
      />
      <div style={{ display: 'flex' }}>
        <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
          {movies
            .filter(movie => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let title = movie.title.toLowerCase();
              return title.startsWith(filter.toLowerCase());
            })
            .map(movie => {
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
        <Outlet />
      </div>
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
