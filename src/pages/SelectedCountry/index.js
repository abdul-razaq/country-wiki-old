import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCountry } from '../../store/actions';
import StyledGrid, { Flag, Name, OtherNames, GeographicalInfo, Languages, MoneyNotation, Misc } from './StyledSelectedCountry';
import Spinner from '../../components/Spinner';


const SelectedCountry = () => {

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { country } = useParams();

  const selectedCountry = useSelector(state => state.selectedCountry);

  useEffect(() => {
    dispatch(selectCountry(country));
  }, []);

  if (selectedCountry[0]) {
    const {name, flag, capital, altSpellings} = selectedCountry[0];
    return (
      <div>
        <h3>{name}</h3>
        <h2>{capital}</h2>
        <p>{altSpellings.join(', ')}</p>
        <img src={flag} alt={name}/>
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default SelectedCountry;
