import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Home, Payments, Auth, User, Product, Chart } from '../components/pages';
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
          <Route exact path="/auth" render={props => <Auth {...props} authUser={authUser} logoutUser={logoutUser} />} />
          <Route exact path="/product/:productID" component={Product} />
          <Route exact path="/chart" component={Chart} />
          <PrivateRoute exact path="/user" component={User} userID={userID} />
          <PrivateRoute exact path="/payments" component={Payments} userID={userID} />
        </Switch>
      </LastLocationProvider>
    </BrowserRouter>
  );
};
