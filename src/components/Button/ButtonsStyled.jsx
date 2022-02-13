import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  text-transform: capitalize;
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
