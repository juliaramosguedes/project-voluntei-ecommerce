import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: RouteComponent, userID, logoutUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) => (userID ? (
        <RouteComponent {...routeProps} userID={userID} logoutUser={logoutUser} />
      ) : (
        <Redirect to={"/auth"} />
      ))}
    />
  );
}
