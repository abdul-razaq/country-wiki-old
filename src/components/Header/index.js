import React from 'react';

import StyledHeader, { StyledNav } from './StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <h1>Country Encyclopedia</h1>
        <h3>About</h3>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
