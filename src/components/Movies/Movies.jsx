import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import movies from '../../movies.json';
console.log(movies);

// const Link = styled(NavLink)`
//   color: #000000;
//   &.active {
//     color: #c40363;
//     font-weight: 700;
//     text-decoration: underline #c40363;
//   }
// `;

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

function Movies() {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <>
      <button type="button">{<NavLink to="/">Go to homepage</NavLink>}</button>
      <div style={{ display: 'flex' }}>
        <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
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
          {movies
            .filter(movie => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let title = movie.title.toLowerCase();
              return title.startsWith(filter.toLowerCase());
            })
            .map(movie => (
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
                {movie.title}
              </QueryNavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}

// // const title = movies['original_title'];

// const Movies = () => {
//   return (
//     <>
//       <input type="text" />
//       <ul>
//         {/* {movies.map(movie => {
//           const { title, id } = movie;
//           return (
//             <li key={id}>
//               <Link to="/movie">{title}</Link>
//             </li>
//           );
//         })} */}

//         <li>
//           <Link to="/movies/movie1">Movie1</Link>
//         </li>
//         <li>
//           <Link to="/movies/movie2">Movie2</Link>
//         </li>
//         <li>
//           <Link to="/movies/movie3">Movie3</Link>
//         </li>
//       </ul>
//     </>
//   );
// };

// CastList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
// };
export default Movies;
