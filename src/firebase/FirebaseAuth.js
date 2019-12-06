import React, { useEffect, useState } from 'react';
import firebase from './FirebaseConnection';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await firebase.auth().onAuthStateChanged(setCurrentUser);
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
