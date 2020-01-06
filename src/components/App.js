import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/countries/all" exact component={AllCountries} />
        <Route path="/countries/:country" exact component={SelectedCountry} />
        <Route
          path="/countries/favorites"
          exact
          component={FavoriteCountries}
        />
        <Route>404, Page not Found</Route>
      </Switch>
    </>
  );
};

export default App;
