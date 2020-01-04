import React from 'react';

import StyledCard, { CardHeader, CardBody, CardFooter } from './StyledCard';
import Button from '../Button';

import Image from '../../tucker-272b.png';


const Card = props => {

  return (
    <StyledCard>
      <CardHeader>
        <img src={Image} alt="flag"/>
      </CardHeader>
      <CardBody>
        <p><span style={{fontWeight: 700}}>Country:</span> Pakistan</p>
        <p><span style={{fontWeight: 700}}>Capital:</span> Islamabad</p>
      </CardBody>
      <CardFooter>
        <Button>Pakistan</Button>
      </CardFooter>
    </StyledCard>
  );
}

export default Card;
