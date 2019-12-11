import React, { useState, useEffect } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';
import { Navigation, SectionD, Footer } from '../../molecules';
import { shirtBig } from '../../../images';
import './Product.css';


export default function Product({ match }) {
  const { productID } = match.params;
  const db = firebase.firestore();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await db
          .collection('products')
          .doc(productID)
          .onSnapshot(snapshot => {
            setProduct(snapshot.data());
            setLoaded(true);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
    <div>
      {loaded ? (
        <>
          <div className="product-page">
            <Navigation />
            <div className="product-container">
              <CardDeck className="product-card-deck">
                <Card className="product-left">
                  <Card.Img
                    className="cardB-image"
                    variant="top"
                    src={shirtBig}
                  />
                </Card>
                <Card className="product-right">
                  <Card.Body className="product-right-body">
                    <Card.Text className="product-right-text">
                      <h2>Camiseta</h2>
                      <p>Feita de algodão e disponível em dois modelos.</p>
                      <Button className="product-button" variant="light">
                        Saiba mais
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
            <SectionD />
            <Footer />
          </div>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
