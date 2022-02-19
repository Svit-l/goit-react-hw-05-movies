import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MovieDataWrap = styled.div`
  display: flex;
  /* background-color: #e1e4ec; */
  border-bottom: thick double #042633;
  width: 100%;
  padding-bottom: 10px;
`;
const MovieImg = styled.img`
  max-width: 200px;
  max-height: 300px;
`;
const Description = styled.div`
  margin-left: 20px;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 700px;
`;

const LinkList = styled.ul`
  padding: 0 20px;
  width: 100%;
`;

const Link = styled(NavLink)`
  color: #000000;
  &.active {
    color: #c40363;
    font-weight: 700;
    text-decoration: underline #c40363;
  }
`;

const CastRewies = styled.div`
  border-bottom: thick double #042633;
  width: 100%;
  padding: 10px 0;
`;

const CastRewiesWrap = styled.div`
  padding: 10px 20px;
`;

const styles = {
  Link,
  MovieDataWrap,
  MovieImg,
  Description,
  CastRewies,
  LinkList,
  Title,
  CastRewiesWrap,
};
export default styles;
