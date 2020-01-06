import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../../components/Card';


const AllCountriesCard = () => {
  
  const allCountries = useSelector(state => state.allCountries);
  return allCountries.map(country => {
    return <Card key={country.name} country={country} />;
  });
};

export default AllCountriesCard;
