import React, { useState, useEffect } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import './Product.css';


export default function Product({ match, products, addToCart }) {
  const { productID } = match.params;
  const [product, setProduct] = useState(products[productID]);

  const {
    name,
    description,
    quantity,
    status,
    image,
    price,
    type,
    size,
  } = product;

  return (
    <>
      <div className="product-page">
        <div className="product-container">
          <CardDeck className="product-card-deck">
            <Card className="product-left">
              <Card.Img
                className="cardB-image"
                variant="top"
                src={image}
              />
            </Card>
            <Card className="product-right">
              <Card.Body className="product-right-body">
                <Card.Text className="product-right-text">
                  <h2>{name}</h2>
                  <p>{description}</p>
                  {
                    product.status ?
                  <Button className="sectionC-card-button col" variant="dark" onClick={() => addToCart(product)}>
                    Adicionar ao carrinho
                  </Button>
                  :
                  <Button disabled className="col">Produto indisponível</Button>
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </>
  );
}
