import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardDeck, Button } from 'react-bootstrap';
// import { shirtBig } from '../../../images';
import { ecobagBig } from '../../../images';
import { notebookBig } from '../../../images';
import { stickersBig } from '../../../images';
import { shirtBig } from '../../../images';
import './SectionC.css';

// const { ecobag, stickers, tshirt, notebook } = products;

// example of product:
// ecobag.image
// ecobag.description
// ecobag.name
// ecobag.quantity
// ecobag.status
// ecobag.price

const Product = ({ product }) => (
  <Card className="sectionC-cards shadow p-3 mb-5 bg-white rounded">
    <a href="/product">
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="sectionC-card-body">
        <Card.Title className="sectionC-card-title">{product.name}</Card.Title>
        <Card.Text>
          <p>{product.description}</p>
          <p className="sectionC-card-price">R$ {product.price.toFixed(2)}</p>
        </Card.Text>
      </Card.Body>
      {/* <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer> */}
    </a>
  </Card>
);

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,

  }).isRequired,
};

const SectionC = ({ products }) => {
  const { ecobag, stickers, tshirt, notebook } = products;

  // example of product:
  // ecobag.image
  // ecobag.description
  // ecobag.name
  // ecobag.quantity
  // ecobag.status
  // ecobag.price

  return (
    <div className="sectionC">
      <h3>Lançamentos</h3>
      <div className="sectionC-CardDeck-container">
        <CardDeck className="sectionC-CardDeck">
          {Object.keys(products).map(key => (
            <Product product={products[key]} />
          ))}
        </CardDeck>
      </div>
    </div>
  );
};

export default SectionC;
