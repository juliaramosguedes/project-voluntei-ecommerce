import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Home from '../components/pages/Home/Home';
import Payments from '../components/pages/Payments/Payments';
import Auth from '../components/pages/Auth/Auth';
import User from '../components/pages/User/User';
import PrivateRoute from './PrivateRoute';

export default () => {
  const id = localStorage.getItem('userID');
  let user = false;
  if (id) {
    user = JSON.parse(id);
  }
  const [userID, setUserID] = useState(user.userID);

  const authUser = (userInfo) => {
    setUserID(userInfo);
  };

  const logoutUser = () => {
    setUserID(false);
  };

  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/auth" render={props => <Auth {...props} authUser={authUser} logoutUser={logoutUser} />} />
          <PrivateRoute exact path="/user" component={User} userID={userID} />
        </Switch>
      </LastLocationProvider>
    </BrowserRouter>
  );
};
