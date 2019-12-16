import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';
import './Cart.css';
import { CartProduct, EditUser, PayPal } from '../../molecules';
import firebase from '../../../firebase/FirebaseConnection';

export default function Cart({ cart, addToCart, deleteProduct, userID, clearCart }) {
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
  }, [successPurchase]);

  const completePurchase = async () => {
    try {
      await db
        .collection('users')
        .doc(userID)
        .get()
        .then(doc => {
          if (doc.exists) {
            const data = doc.data();
            db.collection('shopping').add({
              userID,
              address: data.address,
              cart,
              totalPrice,
              totalQty,
              paymentToken,
              status: 'paid',
            });

            Object.keys(cart).map(key => {
              const newStock = cart[key].stock - cart[key].quantity;
              db.collection('products').doc(key).update({ stock: newStock });
              clearCart(key, newStock);
            });

            setSuccessPurchase(true);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const successPayment = (token) => {
    setPaymentToken(token);
    completePurchase();
  };

  return (
    <div className="cart-page">
      {successPurchase ? (
        <div>
          <h1>Compra realizada com sucesso.</h1>
          <h3>Acompanhe sua compra</h3>
        </div>
      ) : (
        <div className="cartTESTE">
          <div className="cart-title">
            <h1>Carrinho</h1>
          </div>
          <div className="cartA">
            <CardDeck>
              <Card className="cartA-left">
                <Card.Body>
                  {Object.keys(cart).map(key => (
                    <CartProduct
                      product={cart[key]}
                      addToCart={addToCart}
                      deleteProduct={deleteProduct}
                    />
                  ))}
                </Card.Body>
              </Card>
              <Card className="cartA-right">
                <Card.Body>
                  <h3>{totalQty} itens</h3>
                  <h3>Preço total da compra: R$ {totalPrice.toFixed(2).replace('.',',')}</h3>
                  <Link to="/">Continuar comprando</Link>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          {userID ? (
            <div className="cartB">
              <CardDeck>
                <Card className="cartB-left">
                  <Card.Body>
                    <h3 className="user-title">Confira seu cadastro</h3>
                    <EditUser userID={userID} />
                  </Card.Body>
                </Card>
                <Card className="cartB-right">
                  <h3 className="user-title">Realize o pagamento</h3>
                  <p>Selecione um método de pagamento</p>
                  <PayPal
                    totalPrice={totalPrice}
                    successPayment={successPayment}
                  />
                </Card>
              </CardDeck>
            </div>
          ) : (
            <Link to="/auth">Entre ou cadastre-se para continuar</Link>
          )}
        </div>
      )}
    </div>
  );
}

{
  /* <div className="sectionB">
  <CardDeck>
    <Card className="cardB-left">
      <Card.Img className="cardB-image" variant="top" src={product.image} />
    </Card>
    <Card className="cardB-right">
      <Card.Body className="cardB-right-body">
        <Card.Text className="cardB-right-text">
          <h2>Vista a camisa do nosso time!</h2>
          <p>{product.description}</p>
          <Button className="sectionB-button" variant="light">
            Saiba mais
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </CardDeck>
</div>; */
}
