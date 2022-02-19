import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = styled(NavLink)`
  margin-bottom: 10px;
  font-size: 0.6rem;
  background-color: white;
  color: black;
  padding: 5px;
  min-width: 70px;
  border: 1px solid #b1b1b1;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12), 0px 3px 3px rgba(0, 0, 0, 0.14),
    0px 3px 3px rgba(0, 0, 0, 0.2);

  :focus,
  :hover {
    background-color: #636363;
    color: white;
    border: 1px solid #636363;
  }
`;

export default Button;
