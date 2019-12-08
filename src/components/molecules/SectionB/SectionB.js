import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { shirtBig } from '../../../images';
import './SectionB.css';

const SectionB = () => (
  <div className="sectionB">
    <CardDeck>
      <Card className="cardB-left">
        <Card.Img className="cardB-image" variant="top" src={shirtBig} />
      </Card>
      <Card className="cardB-right">
        <Card.Body className="cardB-right-body">
          <Card.Text>
            <h2>Vista a camisa do nosso time!</h2>
            <p>Feita de algodão e disponível em dois modelos.</p>
            <Button className="sectionB-button" variant="light">
              Saiba mais
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
);

export default SectionB;
