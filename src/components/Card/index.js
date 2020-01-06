import React from 'react';
import { useHistory } from 'react-router-dom';

import StyledCard, { CardHeader, CardBody, CardFooter } from './StyledCard';
import Button from '../Button';


const Card = ({ country }) => {

  const {flag, name, capital} = country;

  const history = useHistory();

  const onCardButtonClick = () => {
    history.push(`/countries/${name}`);
  }

  return (
    <StyledCard>
      <CardHeader>
        <img src={flag} alt="country-flag" />
      </CardHeader>
      <CardBody>
        <p><span style={{ fontWeight: 700 }}>{name}</span></p>
        <p><span style={{ fontWeight: 400 }}>Capital: </span><span style={{ fontWeight: 500 }}>{capital}</span></p>
      </CardBody>
      <CardFooter>
        <Button onClick={onCardButtonClick}>Explore {name}</Button>
      </CardFooter>
    </StyledCard>
  );
}

export default Card;
