import {
  useLocation,
  // useSearchParams,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from '../Movies/MoviesStyled';
import HomePageTitle from './HomePageStiled';
import PageWrap from '../PageWrap';

import movies from '../../movies.json';
console.log(movies);

const { Link, MovieListItem } = styles;

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <Link to={to + location.search} {...props} />;
}

function HomePage() {
  return (
    <PageWrap>
      <HomePageTitle>Trending today</HomePageTitle>
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
    </PageWrap>
  );
}

export default HomePage;
