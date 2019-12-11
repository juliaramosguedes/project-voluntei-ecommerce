import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { useLastLocation } from 'react-router-last-location';
import firebase from '../../../firebase/FirebaseConnection';
import { Card, Form, Button } from 'react-bootstrap';
import { Navigation, SectionD, Footer } from '../../molecules';
import './Auth.css';

firebase.auth().languageCode = 'pt';
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const faceProvider = new firebase.auth.FacebookAuthProvider();

export default function Auth({ authUser, logoutUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('Entre ou cadastre-se');
  const [user, setUser] = useState(null);
  // const lastLocation = useLastLocation();

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setStatus('Usuário logado');
      setUser(user);
      setEmail('');
      setPassword('');
      localStorage.setItem('userID', JSON.stringify({ userID: user.uid }));
      authUser(user.uid);
    }
  });

  // if (user) {
  //   if (lastLocation) return <Redirect to={lastLocation.pathname} />;
  // }

  const signup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        setStatus('Usuário cadastrado com sucesso.');
        db.collection('users')
          .doc(result.user.uid)
          .set({ email });
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email')
          setStatus('Endereço de e-mail inválido.');
        if (error.code === 'auth/weak-password')
          setStatus('Crie uma senha mais forte');
        console.log(error.message);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setStatus('Usuário logado com sucesso.');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') setStatus('Senha incorreta');
        console.log(error.message);
      });
  };

  const logout = () => {
    firebase.auth().signOut();
    setStatus('Usuário deslogado com sucesso');
    setUser(null);
    setEmail('');
    setPassword('');
    localStorage.removeItem('userID');
    logoutUser();
    window.location = '/auth';
  };

  const socialLogin = provider => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const { uid, email, displayName, photoURL } = result.user;
        setStatus('Usuário cadastrado com sucesso.');
        db.collection('users')
          .doc(uid)
          .set({
            email,
            name: displayName,
            photoURL,
          });
      })
      .catch(error => {
        setStatus(error.message);
      });
  };

  return (
    <div className="authentication-page">
      <Navigation />

      <div className="authentication-container">
        <Card className="authentication-card">
          {/* <Card style={{ width: '18rem' }}> */}
          <Card.Body>
            {/* <h1>Seja bem vindo</h1> */}
            <h3>{status}</h3>
            <div className="teste6">
              <label>E-mail: </label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <br />
              <label>Senha: </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <br />
              {user ? (
                <button onClick={logout}>Sair</button>
              ) : (
                <div>
                  <button onClick={login}>Entrar</button>
                  <button onClick={signup}>Cadastrar</button>
                  <br />
                  <button onClick={() => socialLogin(googleProvider)}>
                    Login com o Google
                  </button>
                  <br />
                  <button onClick={() => socialLogin(faceProvider)}>
                    Login com o Facebook
                  </button>
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
      <SectionD />
      <Footer />
    </div>
  );
}
