import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../../components/Card';

const HomeCard = () => {

  const country = useSelector(state => state.searchedCountry);
  console.log(country);
  return (
    <Card />
  )
}

export default HomeCard;