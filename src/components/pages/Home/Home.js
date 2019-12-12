import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase/FirebaseConnection';
import {
  Navigation,
  SectionA,
  SectionB,
  SectionC,
  SectionD,
  Footer,
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
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
