import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation, Footer } from './components/molecules';
import Routes from './router/routes';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
}
