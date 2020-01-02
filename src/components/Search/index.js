import React from 'react';

import StyledForm, { StyledLabel, StyledSearchInput } from './StyledSearch';

const Search = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search">Search Country</StyledLabel>
      <StyledSearchInput type="search" name="search" id="search"/>
    </StyledForm>
  );
}

export default Search;
