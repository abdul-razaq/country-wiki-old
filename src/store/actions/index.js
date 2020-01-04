// Action creators live here.
import country from '../../apis/country';

import {
  SELECT_COUNTRY,
  SEARCH_COUNTRY,
  FETCH_ALL_COUNTRIES,
  FAVORITE_COUNTRY,
} from '../actions/types';

export const searchCountry = countryName => async dispatch => {
  const response = await country.get(`/name/${countryName}`);
  
  dispatch({
    type: SEARCH_COUNTRY,
    payload: response.data,
  });
};

export const fetchAllCountries = () => async dispatch => {
  const response = await country.get('/all');

  dispatch({
    type: FETCH_ALL_COUNTRIES,
    payload: response.data,
  });
};

export const favoriteCountry = country => {
  return {
    type: FAVORITE_COUNTRY,
    payload: country,
  };
};

export const selectCountry = countryName => async dispatch => {
  const response = await country.get(`/name/${countryName}`);

  dispatch({
    type: SELECT_COUNTRY,
    payload: response.data,
  });
};
