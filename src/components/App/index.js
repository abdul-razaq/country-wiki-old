import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import pages to display
import HomePage from '../../pages/HomePage';
import AllCountries from '../../pages/AllCountries';
import SelectedCountry from '../../pages/SelectedCountry';
import FavoriteCountries from '../../pages/FavoriteCountries';
import Header from './Header';

import GlobalStyle from '../../GlobalStyle';
import * as ROUTES from '../../constants/routes';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path={ROUTES.BASE} exact component={HomePage} />
        <Route path={ROUTES.ALL_COUNTRIES} exact component={AllCountries} />
        <Route
          path={ROUTES.SELECTED_COUNTRY}
          exact
          component={SelectedCountry}
        />
        <Route
          path={ROUTES.FAVORITE_COUNTRIES}
          exact
          component={FavoriteCountries}
        />
        <Route>404, Page not Found</Route>
      </Switch>
    </>
  );
};

export default App;
