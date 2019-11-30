import React, { Component } from 'react';
import './App.css';
import Routes from './routes';

class App extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    );
  }
}

export default App;
