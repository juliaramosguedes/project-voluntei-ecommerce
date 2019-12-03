// import useStyles from './Home.styles.js';
// import { Cards } from '../../organisms';
import React, { Component } from 'react';
import { Jumbotron, Grid, Rol, Col, Image, Button } from 'react-bootstrap';
import { Header, CardA } from '../../molecules';
import './Home.css';

// const cards = [<CardA />, <CardA />, <CardA />, <CardA />];

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello World!</h1>
          <p>Teste</p>
        </Jumbotron>
        <Header />
      </div>
    );
  }
}

export default Home;
