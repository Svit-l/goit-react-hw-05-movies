import { Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect, useCallback } from 'react';
// import styled from 'styled-components';
// import GlobalStyle from 'common/GlobalStyles';
import Layout from '../Layout';
import HomePage from '../HomePage';
import Movies from '../Movies';
import OneMovie from '../OneMovie';
import CastList from '../Cast/CastList';
import Reviews from '../Reviews';

import movies from '../../movies.json';

console.log(movies);

// const About = React.lazy(() => import('./pages/About'));
// const Dashboard = React.lazy(() => import('./pages/Dashboard'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<OneMovie />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
