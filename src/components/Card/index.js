import React from 'react';

import StyledCard, { CardHeader, CardBody, CardFooter } from './StyledCard';
import Button from '../Button';


const Card = ({ country }) => {
  console.log(country);
  return (
    <StyledCard>
      <CardHeader>
        <img src={country.flag} alt="country-flag" />
      </CardHeader>
      <CardBody>
        <p><span style={{ fontWeight: 700 }}>{country.name}</span></p>
        <p><span style={{ fontWeight: 400 }}>Capital: </span><span style={{ fontWeight: 500 }}>{country.capital}</span></p>
      </CardBody>
      <CardFooter>
        <Button>{country.name}</Button>
      </CardFooter>
    </StyledCard>
  );
}

export default Card;
