import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

export default ({ product, addToCart }) => {
  return (
    <Card className="sectionC-cards shadow p-3 mb-5 bg-white rounded">
      {/* <a href="/product"> */}
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="sectionC-card-body">
        <Card.Title className="sectionC-card-title">{product.name}</Card.Title>
        <Card.Text>
          <p>{product.description}</p>
          <p className="sectionC-card-price">R$ {product.price.toFixed(2)}</p>
        </Card.Text>
      </Card.Body>
      <Button className="sectionC-card-button" variant="dark" onClick={() => addToCart(product)}>
        Adicionar ao carrinho
      </Button>
    </Card>
  );
};
