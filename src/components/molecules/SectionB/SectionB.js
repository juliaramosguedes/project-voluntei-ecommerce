import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SectionB.css';

const SectionB = ({ product }) => (
  <div className="sectionB">
    <CardDeck>
      <Card className="cardB-left">
        <Card.Img className="cardB-image" variant="top" src={product.image} />
      </Card>
      <Card className="cardB-right">
        <Card.Body className="cardB-right-body">
          <Card.Text className="cardB-right-text">
            <h2>Vista a camisa do nosso time!</h2>
            <p>{product.description}</p>
            <Link to={'/product/'+product.id}>
              <Button className="sectionB-button" variant="light">
                Saiba mais
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
);

export default SectionB;
