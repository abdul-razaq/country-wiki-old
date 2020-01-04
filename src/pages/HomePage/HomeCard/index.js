import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../../components/Card';

const HomeCard = () => {

  const country = useSelector(state => state.searchedCountry);
  return country.map(countri => {
    return <Card country={countri}/>
  });
};

export default HomeCard;