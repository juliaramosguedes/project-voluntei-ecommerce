import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase/FirebaseConnection';

const db = firebase.firestore();

export default function User() {
  const [status, setStatus] = useState('Conclua seu cadastro.');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currUser) => {
      if (currUser) {
        setStatus('Usuário logado');
        setUser(currUser);

        db.collection('users').doc(currUser.uid).get().then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setEmail(data.email);
            if (data.name) setName(data.name);
            if (data.photoURL) setPhotoURL(data.photoURL);
            if (data.address) setAddress(data.address);
          } else {
            setStatus('Usuário não encontrado');
          }
        });
      }
    });
  }, []);


  const editProfile = async (e) => {
    e.preventDefault();

    try {
      await db.collection('users').doc(user.uid).set({
        name,
        email,
        photoURL,
        address,
      });

      const currUser = await firebase.auth().currentUser;

      currUser.updateProfile({
        displayName: name,
        photoURL,
      });

      currUser.updateEmail(email);

      setStatus('Cadastro atualizado com sucesso.');
    } catch (error) {
      setStatus(error.message);
    }
  };

  const deleteProfile = async () => {
    try {
      await db.collection('users').doc(user.uid).delete();
      await firebase.auth().currentUser.delete();

      setStatus('Usuário deletado com sucesso.');
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <>
      <h1>Seja bem vindo</h1>
      <h3>{status}</h3>
      <form onSubmit={(e) => editProfile(e)}>
        <label>Nome: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label>E-mail: </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Foto URL: </label>
        <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} /><br />
        <label>Rua: </label>
        <input type="text" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} /><br />
        <label>Número: </label>
        <input type="text" value={address.number} onChange={(e) => setAddress({ ...address, number: e.target.value })} /><br />
        <label>Complemento: </label>
        <input type="text" value={address.complement} onChange={(e) => setAddress({ ...address, complement: e.target.value })} /><br />
        <label>Bairro: </label>
        <input type="text" value={address.neighborhood} onChange={(e) => setAddress({ ...address, neighborhood: e.target.value })} /><br />
        <label>Cidade: </label>
        <input type="text" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} /><br />
        <label>Estado: </label>
        <input type="text" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} /><br />
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={() => deleteProfile()}>Excluir cadastro</button>
    </>
  );
}
