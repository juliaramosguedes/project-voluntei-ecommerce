import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Payments from '../components/pages/Payments/Payments';
import Auth from '../components/pages/Auth/Auth';
import User from '../components/pages/User/User';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/auth" component={Auth} />
        <PrivateRoute exact path="/user" component={User} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;
