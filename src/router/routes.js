import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import {
  Home, Payments, Auth, User, Product, Cart, Error,
} from '../components/pages';
import PrivateRoute from './PrivateRoute';
import firebase from '../firebase/FirebaseConnection';

export default () => {
  const db = firebase.firestore();

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
    firebase.auth().signOut();
    localStorage.removeItem('userID');
    window.location = '/auth';
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

  const cleanCart = (productID, newStock) => {
    cart[productID].stock = newStock;
    setCart({ ...cart });
    localStorage.setItem('cart', JSON.stringify({ cart }));
    if (cart[productID].stock === 0) db.collection('products').doc(productID).update({ status: false });
    setCart({});
    localStorage.removeItem('cart');
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
          <Route exact path="/cart" render={(props) => <Cart {...props} addToCart={addToCart} deleteProduct={deleteProduct} cart={cart} cleanCart={cleanCart} userID={userID} />} />
          <PrivateRoute exact path="/user" component={User} userID={userID} logoutUser={logoutUser} />
          <PrivateRoute exact path="/payments" component={Payments} userID={userID} />
          <Route component={Error} />
        </Switch>
      </LastLocationProvider>
    </BrowserRouter>
  );
};
