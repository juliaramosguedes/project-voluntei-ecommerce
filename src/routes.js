import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Payments from './components/pages/Payments/Payments';
import Auth from './components/pages/Auth/Auth';
import User from './components/pages/User/User';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/payments" component={Payments} />
        <Route path="/auth" component={Auth} />
        <Route path="/user/:uid" component={User} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;
