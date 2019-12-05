import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import firebase from '../../../firebase/FirebaseConnection';

firebase.auth().languageCode = 'pt';
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const faceProvider = new firebase.auth.FacebookAuthProvider();

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('Entre ou cadastre-se');
  const [user, setUser] = useState(null);
  const lastLocation = useLastLocation();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setStatus('Usuário logado');
      setUser(user);
      setEmail('');
      setPassword('');
    }
  });

  if (user) {
    if (lastLocation) return <Redirect to={lastLocation.pathname} />;
  }

  const signup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        setStatus('Usuário cadastrado com sucesso.');
        db.collection('users').doc(result.user.uid).set({ email });
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') setStatus('E-mail inválido');
        if (error.code === 'auth/weak-password') setStatus('Crie uma senha mais forte');
        console.log(error.message);
      });
  }

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        setStatus('Usuário logado com sucesso.');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') setStatus('Senha incorreta');
        console.log(error.message);
      })
  }

  const logout = () => {
    firebase.auth().signOut();
    setStatus('Usuário deslogado com sucesso');
    setUser(null);
    setEmail('');
    setPassword('');
  }

  const socialLogin = (provider) => {
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const { uid, email, displayName, photoURL } = result.user;
      setStatus('Usuário cadastrado com sucesso.');
      db.collection('users').doc(uid).set({
        email,
        name: displayName,
        photoURL,
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <>
      <h1>Seja bem vindo</h1>
      <h3>{status}</h3>
      <>
        <label>E-mail: </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Senha: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        {
          user 
          ?
          <button onClick={logout}>Sair</button>
          :
          <>
            <button onClick={login}>Entrar</button>
            <button onClick={signup}>Cadastrar</button>
            <br />
            <button onClick={() => socialLogin(googleProvider)}>Login com o Google</button>
            <br />
            <button onClick={() => socialLogin(faceProvider)}>Login com o Facebook</button>
          </>
        }
      </>
    </>
  );
}
