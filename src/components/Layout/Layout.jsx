import { Outlet } from 'react-router-dom';
import styles from './LayoutStyled';
import GlobalStyle from 'common/GlobalStyles';

const { Wrapper, Nav, Link } = styles;

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
