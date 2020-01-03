import React from 'react';

import StyledButton from './StyledButton';


const Button = props => {
  return <StyledButton type="button">Explore {props.children}</StyledButton>
}

export default Button;
