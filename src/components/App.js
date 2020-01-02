import React from 'react';

// import pages to display
import HomePage from '../pages/HomePage';
import AllCountries from '../pages/AllCountries';
import SelectedCountry from '../pages/SelectedCountry';
import FavoriteCountries from '../pages/FavoriteCountries';

import GlobalStyle from '../GlobalStyle';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
      <AllCountries />
      <SelectedCountry />
      <FavoriteCountries />
    </>
  );
};

export default App;
