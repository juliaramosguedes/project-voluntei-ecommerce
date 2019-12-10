import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase/FirebaseConnection';

export default function Product({ match }) {
  const { productID } = match.params;
  const db = firebase.firestore();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await db.collection('products').doc(productID).onSnapshot((snapshot) => {
          setProduct(snapshot.data());
          setLoaded(true);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const { name, description, quantity, status, image, price, type, size } = product;

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
