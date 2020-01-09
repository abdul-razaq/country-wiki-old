import React from 'react';
import { faInfoCircle, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import StyledHeader, { StyledNav } from './StyledHeader';
import AboutModal from '../Modal';

const Header = () => {

  return (
    <StyledHeader>
      <StyledNav>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><h1><FontAwesomeIcon icon={faGlobeAmericas} /> Country Encyclopedia</h1></Link>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} component={AboutModal}>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
