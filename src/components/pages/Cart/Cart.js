import React, { useState, useEffect } from 'react';
import './Cart.css';
import { CartProduct } from '../../molecules';

export default function Cart({ cart, addToCart, deleteProduct }) {
  return (
    <div>
      <h1>cart</h1>
      {Object.keys(cart).map(key => (
        <CartProduct product={cart[key]} addToCart={addToCart} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
}
