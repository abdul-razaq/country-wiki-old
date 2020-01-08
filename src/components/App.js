import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import pages to display
import HomePage from '../pages/HomePage';
import AllCountries from '../pages/AllCountries';
import SelectedCountry from '../pages/SelectedCountry';
import FavoriteCountries from '../pages/FavoriteCountries';

import GlobalStyle from '../GlobalStyle';
import * as ROUTES from '../constants/routes';
import AboutModal from './Modal';

const App = () => {
  return (
    <>
      <GlobalStyle />
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
        <Route exact path="/about" component={AboutModal} />
        <Route>404, Page not Found</Route>
      </Switch>
    </>
  );
};

export default App;
