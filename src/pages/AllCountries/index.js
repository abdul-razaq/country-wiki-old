import React, { useEffect } from 'react';
import { fetchAllCountries } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import AllCountriesCard from './AllCountriesCard';


const AllCountries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  const continentSelect = () => {
    
  }

  if (allCountries.length !== 0) {
    return (
      <>
      <Header />
      <AllCountriesCard />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default AllCountries;
