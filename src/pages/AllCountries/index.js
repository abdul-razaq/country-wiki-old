import React, { useEffect, useState } from 'react';
import { fetchAllCountries } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import AllCountriesCard from './AllCountriesCard';


const StyledSelect = styled.select`
  
`;


const AllCountries = () => {
  const [continent, setContinent] = useState(null);
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  const handleSelect = event => {
    setContinent(event.target.value);
  }

  const ContinentSelect = () => {
    return (
      <StyledSelect name="continents" id="continent" onChange={handleSelect}>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="americas">Americas</option>
        <option value="oceania">Oceania</option>
        <option value="australia">Australia</option>
      </StyledSelect>
    )
  }

  if (allCountries.length !== 0) {
    return (
      <>
      <Header />
      <ContinentSelect />
      <AllCountriesCard />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default AllCountries;
