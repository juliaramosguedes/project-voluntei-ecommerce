import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { urls } from './utils/urlUtils';
import Home from './components/pages/Home/Home';
import Payments from './components/pages/Payments/Payments';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={urls.home.path} exact component={Home} />
      <Route path={urls.payments.path} component={Payments} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
