import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from 'components/App';
// import Layout from 'components/Layout';
import HomePage from './components/HomePage';
import Movies from './components/Movies/Movies';
import OneMovie from './components/OneMovie';
import CastList from './components/Cast/CastList';
import Reviews from './components/Reviews';

import './index.css';

const theme = {};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route element={<HomePage />}>
              <Route
                index
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>Select a movie</p>
                  </main>
                }
              />
              <Route path=":movieId" element={<OneMovie />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
            <Route path="/movies" element={<Movies />}>
              <Route
                index
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>Select a movie</p>
                  </main>
                }
              />
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
                <Route
                  index
                  path="/movies/:movieId/cast"
                  element={<CastList />}
                />
                <Route
                  index
                  path="/movies/:movieId/reviews"
                  element={<Reviews />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
