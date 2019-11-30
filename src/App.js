import React, { Component } from 'react';
import './App.css';
import FirebaseService from './firebase/FirebaseService';
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
