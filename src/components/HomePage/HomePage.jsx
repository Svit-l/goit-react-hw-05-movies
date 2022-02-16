import {
  useLocation,
  NavLink,
  Outlet,
  // useSearchParams,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import movies from '../../movies.json';
console.log(movies);

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

function HomePage() {
  return (
    <>
      <nav>
        {movies.map(movie => {
          return (
            <QueryNavLink
              key={movie.id}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/movies/${movie.id}`}
            >
              {movie.title ? movie.title : movie.name}
            </QueryNavLink>
          );
        })}
      </nav>
      <Outlet />
    </>
  );
}

export default HomePage;
