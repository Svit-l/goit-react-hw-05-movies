// // TODO: from Movies and Home

// import {
//   useLocation,
//   NavLink,
//   Outlet,
//   useSearchParams,
// } from 'react-router-dom';
// // import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import movies from '../../movies.json';
// console.log(movies);

// const MovieListItem = styled.li`
//   list-style-type: none;

//   &:not(:last-child) {
//     margin-bottom: 5px;
//   }
//   &::before {
//     content: '🎞';
//     margin-right: 2px;
//     color: #ce6b9e;
//     /* display: block; */
//   }

//   &.active {
//     &::before {
//       color: #c40363;
//       background-color: #c40363;
//     }
//   }
// `;

// const Link = styled(NavLink)`
//   color: #000000;
//   &:hover,
//   &:focus {
//     color: #c40363;
//   }

//   &.active {
//     color: #c40363;
//     font-weight: 700;
//     text-decoration: underline #c40363;
//   }
// `;

// function QueryNavLink({ to, ...props }) {
//   let location = useLocation();
//   return <Link to={to + location.search} {...props} />;
// }

// function MovieListItemRendering({ id, title, name }) {
//   return (
//     <nav>
//       <MovieListItem key={id}>
//         <QueryNavLink to={`/movies/${id}`}>{title ? title : name}</QueryNavLink>
//       </MovieListItem>
//     </nav>
//   );
// }

// export default MovieListItemRendering;
