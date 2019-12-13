import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';
import { SectionA, SectionB, SectionC, SectionD } from '../../molecules';
import './Home.css';

export default function Home() {
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

  const { ecobag, stickers, tshirt, notebook } = products;

  // example of product:
  // ecobag.image
  // ecobag.description
  // ecobag.name
  // ecobag.quantity
  // ecobag.status
  // ecobag.price

  return (
    <div>
      {loaded ? (
        <>
          <SectionA />
          <SectionB product={tshirt} />
          <SectionC products={products} />
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
