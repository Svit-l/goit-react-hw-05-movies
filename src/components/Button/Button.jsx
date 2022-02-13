import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from './ButtonsStyled';

const ButtonBack = ({ onGoback }) => (
  <>
    <Button
      onClick={() => {
        onGoback();
      }}
    ></Button>
  </>
);

// ButtonBack.propTypes = {
//   options: PropTypes.objectOf(PropTypes.number),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default ButtonBack;
