import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCountry } from '../../store/actions';
import Grid, { Flag, RightSide, Lead, Currency } from './StyledSelectedCountry';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';

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
      flag,
    } = selectedCountry[0];
    return (
      <>
        <Header />
        <Grid>
          <Flag src={flag} alt={name} />
          <RightSide>
            <h2>{name}</h2>
            <div>
              <h3>Capital: {capital}</h3>
            </div>
          </RightSide>
          <div>
            <h3>Other Names</h3>
            <p>{altSpellings.join(', ')}</p>
            <p>
              <Lead>Native name:</Lead> {nativeName}
            </p>
          </div>
          <RightSide>
            <h3>Language Spoken</h3>
            <p>{Object.values(languages[0]).join(', ')}</p>
          </RightSide>
          <div>
            <h3>Other translations</h3>
            <p>{Object.values(translations).join(', ')}</p>
          </div>
          <RightSide>
            <h3>Geographical Information</h3>
            <p>
              <Lead>Capital:</Lead> {capital}
            </p>
            <p>
              <Lead>Region / Continent:</Lead> {region}
            </p>
            <p>
              <Lead>Sub-Region:</Lead> {subregion}
            </p>
            <p>
              <Lead>People from {name} are called:</Lead> {demonym}
            </p>
            <p>
              <Lead>Area:</Lead> {area} km<sup>2</sup>
            </p>
            <p>
              <Lead>Population:</Lead> {population}
            </p>
            <p>
              <Lead>Latitude/Longitude:</Lead> [ {latlng.join(' / ')} ]
            </p>
            <p>
              <Lead>Landed Borders:</Lead> [{' '}
              {borders.length === 0 ? 'None' : borders.join(', ')} ]
            </p>
          </RightSide>
          <Currency>
            <h3>Currencies spent</h3>
            <p>{Object.values(currencies[0]).join(', ')}</p>
            <p>
              <Lead>Timezones:</Lead>{' '}
              {timezones.length === 1 ? timezones : timezones.join(', ')}
            </p>
          </Currency>
          <RightSide>
            <h3>Miscellaneous</h3>
            <p>
              <Lead>Top level domain (TLD):</Lead>{' '}
              {topLevelDomain.length === 1
                ? topLevelDomain
                : topLevelDomain.join(', ')}
            </p>
            <p>
              <Lead>Calling code(s):</Lead>{' '}
              {callingCodes.length === 1
                ? callingCodes
                : callingCodes.join(', ')}
            </p>
            <p>
              <Lead>Numeric code(s):</Lead> {numericCode}
            </p>
          </RightSide>
        </Grid>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default SelectedCountry;
