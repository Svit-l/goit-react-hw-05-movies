import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 80px 40px;
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  gap: 2rem;
  border-bottom: solid 1px;
  padding: 1rem 2rem;
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

const styles = { Wrapper, Nav, Link };
export default styles;
