import React from 'react';
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useParams} from 'react-router-dom';

import StyledForm, { StyledLabel, StyledSearchInput } from './StyledSearch';

const Search = () => {

  const onSearchHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <StyledForm onSubmit={event => event.preventDefault()}>
      <StyledLabel htmlFor="search"><FontAwesomeIcon icon={faSearchLocation}/> Search Country</StyledLabel>
        <StyledSearchInput type="search" name="search" aria-label="Search" id="search" placeholder="Search country by name, capital..." />
    </StyledForm>
  );
}
 
export default Search;
