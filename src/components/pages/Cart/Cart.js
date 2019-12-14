import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Cart.css';
import { CartProduct, EditUser, PayPal, Reblocks } from '../../molecules';

export default function Cart({ cart, addToCart, deleteProduct, userID }) {
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
      {Object.keys(cart).map(key => (
        <CartProduct product={cart[key]} addToCart={addToCart} deleteProduct={deleteProduct} />
        ))}
      {userID ?
      <>
        <Card className="user-card shadow-sm">
          <Card.Body>
            <h3 className="user-title">Confira seu cadastro</h3>
            <EditUser userID={userID} />
          </Card.Body>
        </Card>
        <h3 className="user-title">Realize o pagamento</h3>
        <p>Selecione um método de pagamento</p>
        <PayPal totalPrice={totalPrice} />
        <Reblocks />
      </>
      :
      <Link to="/auth">Entre ou cadastre-se para continuar</Link>
    }
    </div>
  );
}
