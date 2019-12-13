import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import {
  Home, Payments, Auth, User, Product, Cart,
} from '../components/pages';
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

  const currCart = localStorage.getItem('cart');
  let shopping = {};
  if (currCart) {
    shopping = JSON.parse(currCart).cart;
  }

  const [cart, setCart] = useState(shopping);

  useEffect(() => {
  }, [cart]);

  const addToCart = (product) => {
    cart[product.id] = product;
    setCart({ ...cart });
    localStorage.setItem('cart', JSON.stringify({ cart }));
  };

  const deleteProduct = (product) => {
    delete cart[product.id];
    setCart({ ...cart });
    localStorage.setItem('cart', JSON.stringify({ cart }));
  };

  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} addToCart={addToCart} />} />
          <Route exact path="/auth" render={(props) => <Auth {...props} authUser={authUser} logoutUser={logoutUser} />} />
          <Route exact path="/product/:productID" component={Product} />
          <Route exact path="/cart" render={(props) => <Cart {...props} addToCart={addToCart} deleteProduct={deleteProduct} cart={cart} />} />
          <PrivateRoute exact path="/user" component={User} userID={userID} />
          <PrivateRoute exact path="/payments" component={Payments} userID={userID} />
        </Switch>
      </LastLocationProvider>
    </BrowserRouter>
  );
};
