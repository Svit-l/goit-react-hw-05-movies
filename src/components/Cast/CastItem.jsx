// import PropTypes from 'prop-types';

// import { ActorDescr,ActorImg, ActorName, Character } from './CastStyled';

import styled from 'styled-components';

export const ActorDescr = styled.li`
  padding: 30px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const ActorImg = styled.img`
  width: 48px;
  height: auto;
  margin: 0 auto 20px;
`;

export const ActorName = styled.p`
  font-size: 20px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Character = styled.p`
  display: block;
  font-size: 14px;
  color: #757575;
`;

const CastItem = ({ avatar, name, character }) => {
  //   const statusColor = isOnline ? s.status : s.statusFalse;

  return (
    <ActorDescr>
      <ActorImg src={avatar} alt={name + ' avatar'} />
      <ActorName>{name}</ActorName>
      <Character>Character:{character}</Character>
    </ActorDescr>
  );
};

// CastItem.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool,
// };

export default CastItem;
