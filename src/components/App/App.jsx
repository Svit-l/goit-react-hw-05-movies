import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'common/GlobalStyles';
import FetchMovies from '../FetchMovie';
import movies from '../../movies.json';
console.log(movies);

const Wrapper = styled.div`
  padding: 40px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  border-bottom: solid 1px;
  padding-bottom: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12), 0px 3px 3px rgba(0, 0, 0, 0.14),
    0px 3px 3px rgba(0, 0, 0, 0.2);
`;

const Link = styled(NavLink)`
  color: #000000;
  &.active {
    color: #c40363;
    font-weight: 700;
    text-decoration: underline #c40363;
  }
`;

const App = () => {
  //   useEffect(() => {
  //     fetchUsers();
  //   }, [fetchUsers]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <button
        type="button"
        className=".btn"
        onClick={() => {
          FetchMovies();
        }}
      >
        Fetch movies
      </button>

      <Outlet />
    </Wrapper>
  );
};

export default App;

async function fetchUsers() {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderUserListItems() {
  console.log('Hello');
}
