import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MovieListItem = styled.li`
  list-style-type: none;
  /* width: 300px; */

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &::before {
    content: '🎞';
    margin-right: 2px;
    color: #ce6b9e;
    /* display: block; */
  }

  &.active {
    &::before {
      color: #c40363;
      background-color: #c40363;
    }
  }
`;

const Link = styled(NavLink)`
  text-decoration: underline;
  color: #000000;
  &:hover,
  &:focus {
    color: #c40363;
  }

  &.active {
    color: #c40363;
    font-weight: 700;
    text-decoration: underline #c40363;
  }
`;

const styles = { MovieListItem, Link };
export default styles;
