import { Routes, Route } from 'react-router-dom';
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
        {/* <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select a movie</p>
              </main>
            }
          /> */}
        <Route path=":movieId" element={<OneMovie />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<OneMovie />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="/movies/:movieId" element={<OneMovie />}>
            <Route index path="/movies/:movieId/cast" element={<CastList />} />
            <Route
              index
              path="/movies/:movieId/reviews"
              element={<Reviews />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
