import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledForm, { StyledLabel, StyledInput, StyledSearchInput } from './StyledSearch';

const Search = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search">Search Country</StyledLabel>
      <StyledInput>
        <FontAwesomeIcon icon={faSearch}/>
        <StyledSearchInput type="search" name="search" aria-label="Search" id="search"/>
      </StyledInput>
    </StyledForm>
  );
}

export default Search;
