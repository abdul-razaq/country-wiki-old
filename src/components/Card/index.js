import React from 'react';
import { useDispatch } from 'react-redux';

import StyledCard, { CardHeader, CardBody, CardFooter } from './StyledCard';
// import StyledButton from '../Button/StyledButton';
import Button from '../Button'
import { selectCountry } from '../../store/actions';


const Card = ({ country }) => {

  const {flag, name, capital} = country;

  const dispatch = useDispatch();

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
        <Button onClick={() => dispatch(selectCountry(name))}>{name}</Button>
      </CardFooter>
    </StyledCard>
  );
}

export default Card;
