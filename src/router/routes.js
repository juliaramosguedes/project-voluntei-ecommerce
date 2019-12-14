import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Spinner } from 'react-bootstrap';
import { Home, Auth, User, Product, Cart } from '../components/pages';
import PrivateRoute from './PrivateRoute';
import firebase from '../firebase/FirebaseConnection';
import './routes.css';

export default () => {
  const db = firebase.firestore();
  const [products, setProducts] = useState({});
  const [loaded, setLoaded] = useState(false);

  db.collection('products').onSnapshot((snapshot) => {
    snapshot.forEach(doc => {
      const { id } = doc;
      products[id] = doc.data();
      setProducts(products);
    });
    setLoaded(true);
  });

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
    window.location = '/cart';
  };

  const clearCart = (productID, newStock) => {
    cart[productID].stock = newStock;
    setCart({ ...cart });
    localStorage.setItem('cart', JSON.stringify({ cart }));
    if (cart[productID].stock === 0) db.collection('products').doc(productID).update({ status: false });
    setCart({});
    localStorage.removeItem('cart');
  }

  const deleteProduct = (product) => {
    delete cart[product.id];
    setCart({ ...cart });
    localStorage.setItem('cart', JSON.stringify({ cart }));
  };

  return (
    <div>
      {loaded ? (
        <BrowserRouter>
              <LastLocationProvider>
                <Switch>
                  <Route exact path="/" render={(props) => <Home {...props} addToCart={addToCart} products={products} />} />
                  <Route exact path="/auth" render={(props) => <Auth {...props} authUser={authUser} logoutUser={logoutUser} />} />
                  <Route exact path="/product/:productID" render={(props) => <Product {...props} addToCart={addToCart} products={products} />} />
                  <Route exact path="/cart" render={(props) => <Cart {...props} addToCart={addToCart} deleteProduct={deleteProduct} cart={cart} clearCart={clearCart} userID={userID} />} />
                  <PrivateRoute exact path="/user" component={User} userID={userID} logoutUser={logoutUser} />
                </Switch>
              </LastLocationProvider>
            </BrowserRouter>
      ) : (
        <div className="home-loading">
          <div>
            <div className="home-loading-spinner-container">
              <div>
                <Spinner
                  className="home-spinner"
                  animation="border"
                  role="status"
                  variant="warning"
                >
                  <span className="sr-only">Carregando...</span>
                </Spinner>
              </div>
            </div>
            <div className="home-loading-h1">
              <h1>Carregando...</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
