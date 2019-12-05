import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from '../firebase/FirebaseConnection';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const currUser = await firebase.auth().currentUser;
    setUser(currUser);
  }, []);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
};

export default PrivateRoute;
