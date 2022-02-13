import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from 'common/GlobalStyles';

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

const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
