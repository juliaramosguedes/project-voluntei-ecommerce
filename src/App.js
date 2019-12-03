import React, { Component } from 'react';
import './App.css';
import FirebaseService from './services/FirebaseService';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({data: dataReceived}))
  }

  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    );
  }
}

export default App;
