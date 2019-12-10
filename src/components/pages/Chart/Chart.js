import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase/FirebaseConnection';
import './Chart.css';

export default function Chart() {
  const db = firebase.firestore();
  const [products, setProducts] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
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
      {
        loaded
          ? <>
            <h1>Carregado!!!</h1>
          </>
          : <h1>Carregando...</h1>
      }
    </div>
  );
}
