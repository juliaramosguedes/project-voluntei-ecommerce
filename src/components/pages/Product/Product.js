import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Navigation, SectionD, Footer } from '../../molecules';
import { shirtBig } from '../../../images';
import './Product.css';

const Product = () => (
  <div className="product-page">
    <Navigation />
    <div className="product-container">
      <CardDeck className="product-card-deck">
        <Card className="product-left">
          <Card.Img className="cardB-image" variant="top" src={shirtBig} />
        </Card>
        <Card className="product-right">
          <Card.Body className="product-right-body">
            <Card.Text className="product-right-text">
              <h2>Camiseta</h2>
              <p>Feita de algodão e disponível em dois modelos.</p>
              <Button className="product-button" variant="light">
                Saiba mais
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
    <SectionD />
    <Footer />
  </div>
);

export default Product;
