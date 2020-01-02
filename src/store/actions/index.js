// Action creators live here.
import country from '../../apis/country';

import {
  SELECT_COUNTRY,
  SEARCH_COUNTRY,
  FETCH_ALL_COUNTRIES,
  FAVORITE_COUNTRY
} from '../actions/types';


export const fetchAllCountries = () => async dispatch => {

  const response = await country.get('/all');

  dispatch({
    type: FETCH_ALL_COUNTRIES,
    payload: response.data
  });
}
