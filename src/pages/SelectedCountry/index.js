import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCountry } from '../../store/actions';
import StyledGrid, { Flag, Name, OtherNames, GeographicalInfo, Languages, MoneyNotation, Misc } from './StyledSelectedCountry';
import Spinner from '../../components/Spinner';
import { object } from 'prop-types';


const SelectedCountry = () => {

  const dispatch = useDispatch();
  const { country } = useParams();

  const selectedCountry = useSelector(state => state.selectedCountry);

  useEffect(() => {
    dispatch(selectCountry(country));
  }, []);

  if (selectedCountry[0]) {
    const {
      name,
      topLevelDomain,
      callingCodes,
      capital,
      altSpellings,
      region,
      subregion,
      population,
      latlng,
      demonym,
      area,
      timezones,
      borders,
      nativeName,
      numericCode,
      currencies,
      languages,
      translations,
      flag
    } = selectedCountry[0];
    return (
      <div>
        <h2>{name}</h2>
        <h3>Capital: {capital}</h3>
        <div>
          <h3>Other Names</h3>
          <p>{altSpellings.join(', ')}</p>
          <p>Native name: {nativeName}</p>
        </div>
        <div>
          <h3>Language Spoken</h3>
          <p>{Object.values(languages[0]).join(', ')}</p>
        </div>
        <div>
          <h3>Other translations</h3>
          <p>{Object.values(translations).join(', ')}</p>
        </div>
        <div>
          <h3>Geographical Information</h3>
          <p>Capital: {capital}</p>
          <p>Region / Continent: {region}</p>
          <p>Sub-Region: {subregion}</p>
          <p>People from {name} are called: {demonym}</p>
          <p>Area: {area} km<sup>2</sup></p>
          <p>Population: {population}</p>
          <p>Latitude/Longitude: [ {latlng.join(' / ')} ]</p>
          <p>Landed Borders: [ {borders.length === 0 ? 'None' : borders.join(', ')} ]</p>
        </div>
        <div>
          <h3>Currencies spent</h3>
          <p>{Object.values(currencies[0]).join(', ')}</p>
          <p>Timezones: {timezones.length === 1 ? timezones : timezones.join(', ')}</p>
        </div>
        <div>
          <h3>Miscellaneous</h3>
          <p>Top level domain (TLD): {topLevelDomain.length === 1 ? topLevelDomain : topLevelDomain.join(', ')}</p>
        </div>
        <img src={flag} alt={name}/>
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default SelectedCountry;
