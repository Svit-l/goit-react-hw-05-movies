// import PropTypes from 'prop-types';
import CastItem from './CastItem';
// import { CastList } from './CastStyled';
import styled from 'styled-components';

export const CastListWrap = styled.ul`
  text-align: center;
`;

const CastList = ({ actors }) => {
  return (
    <CastListWrap>
      {actors.map(actor => {
        const { id, avatar, name, character } = actor;
        return (
          <CastItem
            key={id}
            avatar={avatar}
            name={name}
            character={character}
          />
        );
      })}
    </CastListWrap>
  );
};

// CastList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
// };

export default CastList;
