import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { CartProduct } from '../../molecules';

export default function Cart({ cart, addToCart, deleteProduct }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  
  useEffect(() => {
    let price = 0;
    let qty = 0;

    Object.values(cart).map((value) => {
      if (value.status) {
        price += value.price * value.quantity;
        qty += value.quantity;
      }
    });
    setTotalPrice(price);
    setTotalQty(qty);
  });

  return (
    <div>
      <h1>Carrinho</h1>
  <h3>{totalQty} itens</h3>
      <h3>Preço total: R$ {totalPrice}</h3>
      <Link to="/">Continuar comprando</Link>
      <Link to="/user">Finalizar</Link>
      {Object.keys(cart).map(key => (
        <CartProduct product={cart[key]} addToCart={addToCart} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
}
