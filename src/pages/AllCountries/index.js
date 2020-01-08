import React, { useEffect, useState } from 'react';
import { fetchAllCountries } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import AllCountriesCard from './AllCountriesCard';


const StyledSelect = styled.select`
  display: inline-block;
  width: 30rem;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  margin-top: 2rem;
  color: inherit;
  font-family: inherit;
  font-size: 2.5rem;
  border-radius: 5px;
  background-color: #ccc;
  box-shadow: 2px 2px 2px #bbb;
  transition: all .4s ease-out;

  &:hover {
    background-color: #bbb;
  }

  & option {
    background-color: #ccc;
    outline: none;
    display: block;
    width: 100rem;
    padding: 10rem;
    cursor: pointer;
  }
`;


const AllCountries = () => {
  const [region, setRegion] = useState('');
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  const handleSelect = event => {
    event.preventDefault();
    setRegion(event.target.value);
  }

  useEffect(() => {
    dispatch(fetchAllCountries(region));
  }, [region])

  const RegionSelect = () => {
    return (
      <StyledSelect name="region" id="region" onChange={handleSelect} value={region}>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </StyledSelect>
    )
  }

  if (allCountries.length !== 0) {
    return (
      <>
      <Header />
      <RegionSelect />
      <AllCountriesCard />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default AllCountries;
