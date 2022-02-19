import { useEffect, useState } from 'react';
import {
  // useLocation,
  // NavLink,
  // Outlet,
  useSearchParams,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from './MoviesStyled';
import PageWrap from '../PageWrap';
import ButtonGoHome from '../ButtonGoHome';
import Searchbar from '../Searchbar';

import movies from '../../movies.json';
console.log(movies);

// const { Link, MovieListItem } = styles;

// function QueryNavLink({ to, ...props }) {
//   let location = useLocation();
//   return <Link to={to + location.search} {...props} />;
// }

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, setSearchString] = useState('');
  // const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const query = searchParams.get('query');

  console.log(page);
  console.log(setSearchParams);
  console.log(searchString);

  useEffect(() => {
    if (query) {
      console.log('Make request');
    }
  }, [query]);

  const handleSearchSubmit = searchString => {
    setSearchString(searchString);
    setPage(1);
    // console.log('fotos loading');
    // console.log(searchString);
  };

  // const changePage = () => {
  //   setPage(page + 1);
  // };

  return (
    <PageWrap>
      <ButtonGoHome />

      <Searchbar propsSubmit={handleSearchSubmit} />
      {/* <input
        // propsSubmit={handleSearchSubmit}
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
      <ul>
        <nav>
          {movies
            // .filter(movie => {
            //   let filter = searchParams.get('filter');
            //   if (!filter) return true;
            //   let title = movie.title.toLowerCase();
            //   return title.startsWith(filter.toLowerCase());
            // })
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
      </ul> */}
    </PageWrap>
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
