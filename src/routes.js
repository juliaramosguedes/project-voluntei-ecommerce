import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Payments from './components/pages/Payments/Payments';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/payments" component={Payments} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;