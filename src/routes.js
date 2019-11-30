import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Payments from './components/pages/Payments/Payments';
import Auth from './components/pages/Auth/Auth';

<<<<<<< HEAD
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/payments" component={Payments} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  )
};
=======
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={urls.home.path} exact component={Home} />
      <Route path={urls.payments.path} component={Payments} />
    </Switch>
  </BrowserRouter>
);
>>>>>>> be782136f2f7448cfd72a4bfa0086599d49a7b45

export default Routes;
