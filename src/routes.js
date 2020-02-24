import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import { routePaths } from './settings';

export default (
  <div className="flex-container">
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routePaths.home}
        >
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);
