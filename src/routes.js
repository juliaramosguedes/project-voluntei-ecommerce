import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Payments from './components/pages/Payments/Payments';
import Auth from './components/pages/Auth/Auth';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/payments" component={Payments} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;
