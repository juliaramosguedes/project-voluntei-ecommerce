import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './Cart.css';
import { CartProduct, EditUser, PayPal, Reblocks } from '../../molecules';
import firebase from '../../../firebase/FirebaseConnection';

export default function Cart({ cart, addToCart, deleteProduct, userID, cleanCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [successPurchase, setSuccessPurchase] = useState(false);
  const [paymentToken, setPaymentToken] = useState(null);

  const db = firebase.firestore();

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

  useEffect(() => {
  },[successPurchase]);

  const completePurchase = async () => {
    try {
      await db.collection('users').doc(userID).get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            // if (data.address) setAddress(data.address);
            db.collection('shopping').add({
              userID,
              address: data.address,
              cart,
              totalPrice,
              totalQty,
              paymentToken,
              status: 'paid',
            });

            Object.keys(cart).map((key) => {
              const newStock = cart[key].stock - cart[key].quantity;
              db.collection('products').doc(key).update({ stock: newStock });
              cleanCart(key, newStock);
            });

            setSuccessPurchase(true);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  const successPayPal = (token) => {
    setPaymentToken(token);
    completePurchase();
  }

  return (
    <>
      {successPurchase ?
        <>
          <h1>Compra realizada com sucesso.</h1>
          <h3>Acompanhe sua compra</h3>
        </>
        :
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
              <PayPal totalPrice={totalPrice} successPayPal={successPayPal} />
            </>
            :
            <Link to="/auth">Entre ou cadastre-se para continuar</Link>
          }
        </div>
      }
    </>
  );
}
