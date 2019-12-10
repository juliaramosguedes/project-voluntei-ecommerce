import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase/FirebaseConnection';
import { Navigation, SectionA, SectionB, Footer } from '../../molecules';
import './Home.css';

export default function Home() {
  const db = firebase.firestore();
  const [products, setProducts] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await db.collection('products').onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            const { id } = doc;
            products[id] = doc.data();
            setProducts(products);
          });
          setStatus(true);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
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
        status
          ? <>
            <Navigation />
            <SectionA />
            <SectionB />
            <Footer />
          </>
          : <h1>Carregando...</h1>
      }
    </div>
  );
}
