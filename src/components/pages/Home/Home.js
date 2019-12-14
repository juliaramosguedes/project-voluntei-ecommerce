import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';
import {
  SectionA,
  SectionB,
  SectionC,
  SectionD,
} from '../../molecules';
import './Home.css';

export default function Home({ addToCart }) {
  const db = firebase.firestore();
  const [products, setProducts] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    db.collection('products').onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        const { id } = doc;
        products[id] = doc.data();
        setProducts(products);
      });
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      {loaded ? (
        <>
          <SectionA />
          <SectionB product={products.tshirt} />
          <SectionC products={products} addToCart={addToCart} />
          <SectionD />
        </>
      ) : (
        <div className="home-loading">
          <div>
            <div className="home-loading-spinner-container">
              <div>
                <Spinner
                  className="home-spinner"
                  animation="border"
                  role="status"
                  variant="warning"
                >
                  <span className="sr-only">Carregando...</span>
                </Spinner>
              </div>
            </div>
            <div className="home-loading-h1">
              <h1>Carregando...</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
