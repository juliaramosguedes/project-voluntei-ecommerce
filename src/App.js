import React from 'react';
import './App.css';
import FirebaseService from './services/FirebaseService';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';

export default function App() {
  return (
    <div className="container">
      <Routes />
    </div>
  );
}
