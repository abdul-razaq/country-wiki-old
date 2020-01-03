import React from 'react';
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledForm, { StyledLabel, StyledSearchInput } from './StyledSearch';

const Search = ({ searchInputHandler }) => {

  return (
    <StyledForm>
      <StyledLabel htmlFor="search"><FontAwesomeIcon icon={faSearchLocation}/> Search Country</StyledLabel>
        <StyledSearchInput type="search" name="search" aria-label="Search" id="search" placeholder="Search country by name, capital..." onChange={event => searchInputHandler(event.target.value)} />
    </StyledForm>
  );
}
 
export default Search;
