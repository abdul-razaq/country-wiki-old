import React from 'react';
import { faInfoCircle, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledHeader, { StyledNav } from './StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <h1><FontAwesomeIcon icon={faGlobeAmericas}/> Country Encyclopedia</h1>
        <h3><FontAwesomeIcon icon={faInfoCircle}/> About</h3>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
