import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

export default ({ product }) => {
  // localStorage.removeItem('cart');
  const currCart = localStorage.getItem('cart');
  let shopping = false;
  if (currCart) {
    shopping = JSON.parse(currCart);
    // setCart(shopping.cart);
  }
  const [cart, setCart] = shopping ? useState(shopping.cart) : useState({});

  const cartProduct = {
    name: product.name,
    price: product.price,
    qty: 1,
    stock: product.quantity,
  };

  const addToCart = () => {
    cart[product.name] = cartProduct;
    // cart.push(cartProduct);
    setCart(cart);
    localStorage.setItem('cart', JSON.stringify({ cart }));
    console.log(cart);
  };

  // useEffect(() => {
  //   console.log(cart);
  // }, []);
  // console.log(cart);

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
      <Button className="sectionC-card-button" variant="dark" onClick={addToCart}>
        Adicionar ao carrinho
      </Button>
    </Card>
  );
};
