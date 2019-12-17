import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';
import './Cart.css';
import { CartProduct, EditUser, PayPal } from '../../molecules';
import firebase from '../../../firebase/FirebaseConnection';

export default function Cart({
  cart,
  addToCart,
  deleteProduct,
  userID,
  clearCart,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [successPurchase, setSuccessPurchase] = useState(false);
  const [paymentToken, setPaymentToken] = useState(null);

  const db = firebase.firestore();

  useEffect(() => {
    let price = 0;
    let qty = 0;

    Object.values(cart).map(value => {
      if (value.status) {
        price += value.price * value.quantity;
        qty += value.quantity;
      }
    });

    setTotalPrice(price);
    setTotalQty(qty);
  });

  useEffect(() => {}, [successPurchase]);

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
              db.collection('products')
                .doc(key)
                .update({ stock: newStock });
              clearCart(key, newStock);
            });

            setSuccessPurchase(true);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const successPayment = token => {
    setPaymentToken(token);
    completePurchase();
  };

  return (
    <div className="cart-page">
      <div className="cart-page-container">
        {successPurchase ? (
          <div className="cart-page-wrap">
            <div className="cart-title">
              <h1>Compra realizada com sucesso.</h1>
              <h3>Acompanhe sua compra</h3>
            </div>
          </div>
        ) : (
          <div className="cart-page-wrap">
            <div className="cart-title">
              <h1>Carrinho</h1>
            </div>
            <div className="cartA">
              <CardDeck>
                <Card className="cartA-left">
                  <Card.Body className="cartA-left-body">
                    {Object.keys(cart).map(key => (
                      <CartProduct
                        product={cart[key]}
                        addToCart={addToCart}
                        deleteProduct={deleteProduct}
                      />
                    ))}
                  </Card.Body>
                </Card>
                <div className="cartA-right-container">
                  <Card className="cartA-right shadow">
                    <Card.Body className="cartA-right-body">
                      <h3 className="user-title">Resumo:</h3>
                      <p>
                        <b>Quantidade:</b> {totalQty} itens
                      </p>
                      <p>
                        <b>Frete:</b> grátis
                      </p>
                      <p>
                        <b>Desconto:</b> R$ 0,00
                      </p>
                      <p>
                        <b>Valor total:</b> R${' '}
                        {totalPrice.toFixed(2).replace('.', ',')}
                      </p>
                      <Link className="cartA-right-link" to="/">
                        Continuar comprando
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </CardDeck>
            </div>
            {userID ? (
              <div className="cartB">
                <div className="cart-title">
                  <h1>Finalizar a compra</h1>
                </div>
                <CardDeck>
                  <Card className="cartB-left shadow">
                    <Card.Body className="cartB-left-body">
                      <h3 className="user-title">Confira seu cadastro</h3>
                      <EditUser userID={userID} />
                    </Card.Body>
                  </Card>
                  <div className="cartB-right-container">
                    <Card className="cartB-right shadow">
                      <h3 className="user-title">Pagamento</h3>
                      <p>Escolha o meio de pagamento</p>
                      <PayPal
                        totalPrice={totalPrice}
                        successPayment={successPayment}
                        className="cartB-rigth-paypal"
                      />
                    </Card>
                  </div>
                </CardDeck>
              </div>
            ) : (
              <div className="cartC-link-wrap">
                <Link className="cartC-link" to="/auth">
                  Entre ou cadastre-se para continuar
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
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
