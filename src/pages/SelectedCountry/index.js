import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCountry } from '../../store/actions';
import StyledGrid, { Flag, Name, OtherNames, GeographicalInfo, Languages, MoneyNotation, Misc } from './StyledSelectedCountry';

const SelectedCountry = () => {

  const dispatch = useDispatch();
  const { country } = useParams();

  const selectedCountry = useSelector(state => state.selectedCountry);

  useEffect(() => {
    dispatch(selectCountry(country));
  }, []);

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

  const loadingSpinner = <p>Loading...</p>
  const showCountryDetails = (
    <StyledGrid>
      <Flag>
        Flag
      </Flag>
      <Name>
        Country name
        capital
      </Name>
      <OtherNames>
        other names
      </OtherNames>
      <GeographicalInfo>
        GeographicalInfo
      </GeographicalInfo>
      <Languages>
        languages
      </Languages>
      <MoneyNotation>
        Money
      </MoneyNotation>
      <Misc>
        Misc
      </Misc>
    </StyledGrid>
  );

  return (selectedCountry.length === 0 ? loadingSpinner : name);
}

export default SelectedCountry;
