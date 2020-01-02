import { combineReducers } from 'redux';

import allCountries from './allCountries';
import favoriteCountries from './favoriteCountries';
import searchedCountry from './searchedCountry';
import selectedCountry from './selectedCountry';

export default combineReducers({
  allCountries,
  favoriteCountries,
  searchedCountry,
  selectedCountry
});
