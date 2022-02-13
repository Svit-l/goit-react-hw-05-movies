import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import App from 'components/App';
import Layout from 'components/Layout';
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
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<Movies />}>
              <Route path="/movies/one-movie" element={<OneMovie />}>
                <Route path="/movies/one-movie/cast" element={<CastList />} />
                <Route path="/movies/one-movie/reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
