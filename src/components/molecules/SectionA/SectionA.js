import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { beeYellow } from '../../../images';
import './SectionA.css';

const SectionA = () => (
  <div className="sectionA">
    <CardDeck className="sectionA-cardDeck">
      <Card className="cardA-left">
        <Card.Body className="cardA-left-body">
          <Card.Text className="cardA-left-text">
            <h1>Bem vindo à loja Voluntei!</h1>
            <p>Conheça nossos produtos.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardA-right">
        <Card.Img variant="top" src={beeYellow} />
      </Card>
    </CardDeck>
  </div>
);

export default SectionA;
