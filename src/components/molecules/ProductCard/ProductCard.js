import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default ({ product, addToCart }) => {
  return (
    <Card className="sectionC-cards shadow p-3 mb-5 bg-white rounded">
      <Link to={'/product/'+product.id}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="sectionC-card-body">
          <Card.Title className="sectionC-card-title">{product.name}</Card.Title>
          <Card.Text>
            <p>{product.description}</p>
            <p className="sectionC-card-price">R$ {product.price}</p>
          </Card.Text>
        </Card.Body>
        {
          product.status ?
        <Button className="sectionC-card-button col" variant="dark" onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </Button>
        :
        <Button disabled className="col">Produto indisponível</Button>
        }
      </Link>
    </Card>
  );
};
